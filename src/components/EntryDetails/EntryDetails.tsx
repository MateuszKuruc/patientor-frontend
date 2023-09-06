import { Entry } from "../../types";
import HealthcheckEntry from "./HealtcheckEntry";
import HospitalEntry from "./HospitalEntry";
import OccupationalHealthcareEntry from "./OccupationalHealthcareEntry";

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  console.log("entry component", entry);
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "HealthCheck":
      return <HealthcheckEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntry entry={entry} />;
    default:
      return null;
  }
};

export default EntryDetails;
