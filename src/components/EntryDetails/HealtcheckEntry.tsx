import { Entry } from "../../types";

const HealthcheckEntry: React.FC<{ entry: Entry }> = ({ entry }) => {
  return (
    <div>
      {entry.date} {entry.description}
    </div>
  );
};

export default HealthcheckEntry;
