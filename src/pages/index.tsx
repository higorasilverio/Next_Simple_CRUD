import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import NewIcon from "../components/icons/NewIcon";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

const CLIENTS_ARRAY = [
  new Client("Higor", 29, "0"),
  new Client("Priscila", 29, "1"),
  new Client("Thor", 3, "2"),
  new Client("Loki", 1, "3"),
];

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(null);
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    setClients(CLIENTS_ARRAY);
  }, []);

  const selectClient = useCallback((client: Client) => {
    setClient(client);
    setVisible("form");
  }, []);

  const removeClient = useCallback(
    (_client: Client) => {
      const newClients = clients.filter(
        (currentClient) => currentClient.id !== _client.id
      );

      setClients(newClients);
    },
    [clients]
  );

  const handleNewClient = useCallback(() => {
    setClient(Client.emptyClient());
    setVisible("form");
  }, []);

  const handleRegisterCancel = useCallback(() => {
    setVisible("table");
  }, []);

  const getNewId = useCallback(() => {
    const lastId = clients[clients.length - 1].id;
    let idNumber = parseInt(lastId, 10) + 1;
    let existingId = clients.findIndex(
      (_client) => _client.id === idNumber.toString()
    );
    while (existingId >= 0) {
      idNumber++;
      existingId = clients.findIndex(
        (_client) => _client.id === idNumber.toString()
      );
    }

    return idNumber.toString();
  }, [clients]);

  const handleRegisterSave = useCallback(
    (_client: Client) => {
      const { name: _name, age: _age, id: _id } = _client;

      if (_id) {
        const index = clients.findIndex((clnt) => clnt.id === _id);
        const newClients = clients.map((clnt, i) =>
          i !== index ? clnt : _client
        );

        setClients(newClients);
      } else {
        const id = getNewId();
        const newClientsArray = clients.concat([
          new Client(_client.name, _client.age, id),
        ]);

        setClients(newClientsArray);
      }
      setVisible("table");
    },
    [clients, getNewId]
  );

  return (
    <div
      className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
    `}
    >
      <Layout title="Simple Register Form">
        {visible === "table" ? (
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
        ) : (
          <Form
            client={client}
            handleRegisterCancel={handleRegisterCancel}
            handleRegisterSave={handleRegisterSave}
          />
        )}
      </Layout>
    </div>
  );
}
