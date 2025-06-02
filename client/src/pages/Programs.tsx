import { useEffect, useState } from "react";

import ProgramCard from "../components/ProgramCard";
import type ProgramType from "../types/programType";

function Programs() {
  const [programs, setPrograms] = useState<ProgramType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => setPrograms(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </>
  );
}
export default Programs;
