import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import FormInput from "./FormInput";
import CancelIcon from "./icons/CancelIcon";
import EditIcon from "./icons/EditIcon";
import SaveIcon from "./icons/SaveIcon";
import TrashIcon from "./icons/TrashIcon";

type FormProps = {
  client?: Client;
};

const Form = ({ client }: FormProps) => {
  const [name, setName] = useState<string>(client?.name ?? "");
  const [age, setAge] = useState<number>(client?.age ?? 0);
  const [id] = useState<string>(client?.id ?? "");

  return (
    <>
      <div className="w-full">
        <FormInput
          className="w-1/3"
          text="ID"
          value={id}
          type="text"
          readonly
        />
        <div className="flex gap-4">
          <FormInput
            className="w-4/5"
            text="Name"
            value={name}
            type="text"
            onChange={setName}
          />
          <FormInput
            className="w-1/5"
            text="Age"
            value={age}
            type="number"
            onChange={setAge}
          />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Button>
          {id ? "Update" : "Save"} <SaveIcon />
        </Button>
        <Button>
          Cancel <CancelIcon />
        </Button>
      </div>
    </>
  );
};

export default Form;
