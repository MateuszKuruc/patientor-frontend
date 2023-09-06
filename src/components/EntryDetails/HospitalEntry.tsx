import { HospitalEntry } from "../../types";

const HospitalEntryComponent: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  console.log("hospital entry", entry);
  return (
    <div>
      {entry.date} {entry.description} {entry.discharge.criteria}
    </div>
  );
};

export default HospitalEntryComponent;
