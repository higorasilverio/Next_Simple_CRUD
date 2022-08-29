import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import NewIcon from "../components/icons/NewIcon";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Table from "../components/Table";
import Client from "../core/Client";
import { ClientsCollection } from "../firebase/db/ClientsCollection";
import { useLoading } from "../hooks/useLoading";
import { useVisibility } from "../hooks/useVisibility";

export default function Home() {
  const { showTable, showForm, tableVisible, formVisible } = useVisibility();
  const { loading, stopLoading, startLoading } = useLoading();

  const [client, setClient] = useState<Client>(null);
  const [clients, setClients] = useState<Client[]>([]);

  const collection = useMemo(() => new ClientsCollection(), []);

  const getAll = useCallback(async () => {
    await collection
      .findAll()
      .then((response) => setClients(response))
      .catch((error) => console.log(error))
      .finally(() => {
        showTable();
        stopLoading();
      });
  }, [collection, showTable, stopLoading]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const selectClient = useCallback(
    (client: Client) => {
      setClient(client);
      showForm();
    },
    [showForm]
  );

  const removeClient = useCallback(
    async (_client: Client) => {
      startLoading();
      await collection.delete(_client).then(getAll);
    },
    [collection, getAll, startLoading]
  );

  const handleNewClient = useCallback(() => {
    setClient(Client.emptyClient());
    showForm();
  }, [showForm]);

  const handleRegisterSave = useCallback(
    async (_client: Client) => {
      startLoading();

      const { name, age, id } = _client;

      id
        ? await collection.update(_client).then(getAll)
        : await collection.save(new Client(name, age)).then(getAll);
    },
    [collection, getAll, startLoading]
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
        {!loading && tableVisible && (
          <>
            <div className="flex sm:justify-end mb-2 w-full">
              <Button onClick={handleNewClient}>
                New <NewIcon className="ml-2" />
              </Button>
            </div>
            <Table
              clients={clients}
              selectClient={selectClient}
              removeClient={removeClient}
            />
          </>
        )}
        {!loading && formVisible && (
          <Form
            client={client}
            handleRegisterCancel={showTable}
            handleRegisterSave={handleRegisterSave}
          />
        )}
      </Layout>
    </div>
  );
}
