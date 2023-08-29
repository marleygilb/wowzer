import { useEffect, useState } from "react";
import Module from "../wow-logic";

interface wowModule {
  checkForWow: (arg0: string) => boolean;
}
const useWasm = () => {
  const [wasm, setWasm] = useState<wowModule | undefined>(undefined);

  useEffect(() => {
    Module().then((mod: wowModule) => setWasm(mod));
  }, []);

  return wasm;
};

export default useWasm;
