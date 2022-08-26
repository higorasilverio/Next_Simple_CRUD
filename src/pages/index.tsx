import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import NewIcon from "../components/icons/NewIcon";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Table from "../components/Table";
import Client from "../core/Client";
import { ClientsCollection } from "../firebase/db/ClientsCollection";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(null);
  const [clients, setClients] = useState<Client[]>([]);

  const collection = useMemo(() => new ClientsCollection(), []);

  const getAll = useCallback(async () => {
    await collection
      .findAll()
      .then((response) => setClients(response))
      .catch((error) => console.log(error))
      .finally(() => {
        setVisible("table");
        setLoading(false);
      });
  }, [collection]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const selectClient = useCallback((client: Client) => {
    setClient(client);
    setVisible("form");
  }, []);

  const removeClient = useCallback(
    async (_client: Client) => {
      setLoading(true);
      await collection.delete(_client).then(getAll);
    },
    [collection, getAll]
  );

  const handleNewClient = useCallback(() => {
    setClient(Client.emptyClient());
    setVisible("form");
  }, []);

  const handleRegisterSave = useCallback(
    async (_client: Client) => {
      setLoading(true);
      const { name, age, id } = _client;

      id
        ? await collection.update(_client).then(getAll)
        : await collection.save(new Client(name, age)).then(getAll);
    },
    [collection, getAll]
  );

  return (
    <div
      className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
    `}
    >
      <Layout title="Simple Register Form">
        {loading && <Loading />}
        {!loading && visible === "table" && (
          <>
            <div className="flex justify-end mb-2">
              <Button onClick={handleNewClient}>
                New <NewIcon />
              </Button>
            </div>
            <Table
              clients={clients}
              selectClient={selectClient}
              removeClient={removeClient}
            />
          </>
        )}
        {!loading && visible === "form" && (
          <Form
            client={client}
            handleRegisterCancel={() => setVisible("table")}
            handleRegisterSave={handleRegisterSave}
          />
        )}
      </Layout>
    </div>
  );
}
