import { useEffect } from "react";
import TaraForm from "../components/TaraForm";
import { saveUTMsToStorage } from "../components/utm";

export default function Join() {
  useEffect(() => {
    saveUTMsToStorage();
  }, []);

  return <TaraForm />;
}