import { Entry } from "../../types";

const HospitalEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
  return (
    <div>
      {entry.date} {entry.description}
    </div>
  );
};

export default HospitalEntry;
