import { useState, useEffect } from "react";
import { getRandomFact } from "../services/getFact";

export function useCatFact() {
  const [catFact, setCatFact] = useState(null);

  const refreshRandomFact = () =>
    getRandomFact().then((newfact) => setCatFact(newfact));

  useEffect(() => {
    refreshRandomFact();
  }, []);

  return { catFact, refreshRandomFact };
}
