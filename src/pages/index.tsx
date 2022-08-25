import { useCallback } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import NewIcon from "../components/icons/NewIcon";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clientsArray = [
    new Client("Higor", 29, "0"),
    new Client("Priscila", 29, "1"),
    new Client("Thor", 3, "2"),
    new Client("Loki", 1, "3"),
  ];

  const selectClient = useCallback((client: Client) => {
    console.log(client.name + " selected");
  }, []);

  const removeClient = useCallback((client: Client) => {
    console.log(client.name + " removed");
  }, []);

  return (
    <div
      className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
    `}
    >
      <Layout title="Simple Register Form">
        <div className="flex justify-end mb-2">
          <Button>
            New <NewIcon />
          </Button>
        </div>
        <Table
          clients={clientsArray}
          selectClient={selectClient}
          removeClient={removeClient}
        />
        <Form />
      </Layout>
    </div>
  );
}
