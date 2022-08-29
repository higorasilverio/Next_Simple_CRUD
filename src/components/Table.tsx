import { useCallback } from "react";
import Client from "../core/Client";
import EditIcon from "./icons/EditIcon";
import TrashIcon from "./icons/TrashIcon";

type TableProps = {
  clients: Client[];
  selectClient?: (client: Client) => void;
  removeClient?: (client: Client) => void;
};

const Table = ({ clients, selectClient, removeClient }: TableProps) => {
  const renderTableHeader = useCallback(
    () => (
      <tr className="w-full flex">
        <th className="text-md w-4/12 py-2 hidden md:block">ID</th>
        <th className="text-md w-6/12 py-2 md:w-4/12">Name</th>
        <th className="text-md w-2/12 py-2 md:w-1/12">Age</th>
        <th className="text-md w-4/12 py-2 md:w-3/12">Actions</th>
      </tr>
    ),
    []
  );

  const renderData = useCallback(
    () =>
      clients?.map((client, index) => {
        const { id, name, age } = client;

        let safeName = name;
        const unsafeIndex = safeName
          .split(" ")
          .findIndex((str) => str.length >= 12);
        if (unsafeIndex >= 0) safeName = safeName.slice(0, 12).concat("...");

        return (
          <tr
            key={`table-client-${id}`}
            className={`${
              index % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
            } flex items-center justify-center w-full`}
          >
            <td className="text-md w-4/12 py-1 hidden md:flex md:justify-center md:items-center text-center">
              {id}
            </td>
            <td className="text-md w-6/12 py-1 md:w-4/12 flex justify-center items-center text-center">
              {safeName}
            </td>
            <td className="text-md w-2/12 py-1 md:w-1/12 flex justify-center items-center text-center">
              {age}
            </td>
            <td className="text-md w-4/12 py-1 md:w-3/12 flex justify-center items-center text-center">
              <button
                onClick={() => selectClient(client)}
                className={`
                  p-1 rounded-full 
                  text-blue-600 hover:bg-blue-600 hover:text-white
                `}
              >
                <EditIcon />
              </button>
              <button
                onClick={() => removeClient(client)}
                className={`
                  p-1 rounded-full 
                  text-red-600 hover:bg-red-600 hover:text-white
                `}
              >
                <TrashIcon />
              </button>
            </td>
          </tr>
        );
      }),
    [clients, removeClient, selectClient]
  );

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        block text-slate-100 
        bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
      `}
      >
        {renderTableHeader()}
      </thead>
      <tbody className="block w-full max-h-96 overflow-y-auto overflow-x-hidden">
        {renderData()}
      </tbody>
    </table>
  );
};

export default Table;
