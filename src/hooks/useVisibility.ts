import { useCallback, useState } from "react";

export const useVisibility = () => {
  const [visible, setVisible] = useState<"table" | "form">("table");

  const showTable = useCallback(() => {
    setVisible("table");
  }, []);

  const showForm = useCallback(() => {
    setVisible("form");
  }, []);

  return {
    tableVisible: visible === "table",
    formVisible: visible === "form",
    showForm,
    showTable,
  };
};
