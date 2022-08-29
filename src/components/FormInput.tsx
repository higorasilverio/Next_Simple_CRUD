type FormInputProps = {
  text: string;
  type?: "text" | "number";
  value: any;
  readonly?: boolean;
  className?: string;
  onChange?: (value: any) => void;
};

const FormInput = ({
  text,
  type,
  value,
  readonly,
  className,
  onChange,
}: FormInputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-1 mt-2 sm:mt-4">{text}</label>
      <input
        type={type ?? "text"}
        value={value}
        readOnly={readonly}
        onChange={onChange}
        className={`
          border rounded-lg focus:outline-none bg-slate-100 px-2 py-2
          ${readonly ? "" : "focus:bg-white"}
          ${readonly ? "border-slate-300" : "border-slate-700"}
          ${readonly ? "text-slate-500" : "text-slate-900"}
        `}
      />
    </div>
  );
};

export default FormInput;
