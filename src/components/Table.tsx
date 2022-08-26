import { MouseEventHandler, ReactNode, useCallback } from "react";
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
      <tr>
        <th className="text-left px-5 py-2 text-xl">Code</th>
        <th className="text-left px-5 py-2 text-xl">Name</th>
        <th className="text-left px-5 py-2 text-xl">Age</th>
        <th className="px-5 py-2 text-xl">Actions</th>
      </tr>
    ),
    []
  );

  const renderData = useCallback(
    () =>
      clients?.map((client, index) => {
        const { id, name, age } = client;
        return (
          <tr
            key={`table-client-${id}`}
            className={`${index % 2 === 0 ? "bg-slate-200" : "bg-slate-300"}`}
          >
            <td className="text-left px-5 py-2 text-xl">{id}</td>
            <td className="text-left px-5 py-2 text-xl">{name}</td>
            <td className="text-left px-5 py-2 text-xl">{age}</td>
            <td className="flex justify-center items-center px-5 py-2 text-xl">
              <button
                onClick={() => selectClient(client)}
                className={`
                  mx-1 p-1 rounded-full 
                  text-blue-600 hover:bg-blue-600 hover:text-white
                `}
              >
                <EditIcon />
              </button>
              <button
                onClick={() => removeClient(client)}
                className={`
                  mx-1 p-1 rounded-full 
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
        text-slate-100 
        bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
      `}
      >
        {renderTableHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};

export default Table;
