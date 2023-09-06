import { OccupationalHealthcareEntry } from "../../types";

const OccupationalHealthcareComponent: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <div>
      {entry.date} {entry.description} {entry.employerName}
    </div>
  );
};

export default OccupationalHealthcareComponent;
