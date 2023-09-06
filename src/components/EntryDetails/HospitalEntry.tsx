import { HospitalEntry } from "../../types";
import { Paper, Box } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const HospitalEntryComponent: React.FC<{ entry: HospitalEntry }> = ({
  entry,
}) => {
  console.log("hospital entry", entry);
  return (
    <Box
      border={1}
      borderRadius={1}
      borderColor="primary.main"
      marginBottom={2}
    >
      <Paper style={{ padding: "16px" }}>
        <p>
          {entry.date} <LocalHospitalIcon />
        </p>
        <p>
          <i>{entry.description}</i>
        </p>
        <p>diagnosed by {entry.specialist}</p>
      </Paper>
    </Box>
  );
};

export default HospitalEntryComponent;
