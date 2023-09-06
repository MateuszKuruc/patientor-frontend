import { OccupationalHealthcareEntry } from "../../types";
import WorkIcon from "@mui/icons-material/Work";
import { Paper, Box } from "@mui/material";

const OccupationalHealthcareComponent: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <Box
      border={1}
      borderRadius={1}
      borderColor="primary.main"
      marginBottom={2}
    >
      <Paper style={{ padding: "16px" }}>
        <p>
          {entry.date} <WorkIcon />
        </p>
        <p>Employer: {entry.employerName}</p>
        <p>
          <i>{entry.description}</i>
        </p>
        <p>diagnosed by {entry.specialist}</p>
      </Paper>
    </Box>
  );
};

export default OccupationalHealthcareComponent;
