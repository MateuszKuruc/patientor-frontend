import { Entry } from "../../types";

const OccupationalHealthcareEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
  return (
    <div>
      {entry.date} {entry.description}
    </div>
  );
};

export default OccupationalHealthcareEntry;
