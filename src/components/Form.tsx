import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import FormInput from "./FormInput";
import CancelIcon from "./icons/CancelIcon";
import SaveIcon from "./icons/SaveIcon";

type FormProps = {
  client?: Client;
  handleRegisterCancel: () => void;
  handleRegisterSave: (client: Client) => void;
};

const Form = ({
  client,
  handleRegisterCancel,
  handleRegisterSave,
}: FormProps) => {
  const [name, setName] = useState<string>(client?.name ?? "");
  const [age, setAge] = useState<number>(client?.age ?? 0);
  const [id] = useState<string>(client?.id ?? "");

  return (
    <>
      <div className="w-full">
        <FormInput
          className="w-full sm:w-1/3"
          text="ID"
          value={id}
          type="text"
          readonly
        />
        <div className="w-full sm:flex sm:gap-4">
          <FormInput
            className="w-full sm:w-4/5"
            text="Name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            className="w-full sm:w-1/5"
            text="Age"
            value={age}
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 sm:gap-0 sm:flex-row sm:justify-end mt-5">
        <Button onClick={() => handleRegisterSave(new Client(name, age, id))}>
          {id ? "Update" : "Save"} <SaveIcon className="ml-2" />
        </Button>
        <Button onClick={handleRegisterCancel}>
          Cancel <CancelIcon className="ml-2" />
        </Button>
      </div>
    </>
  );
};

export default Form;
