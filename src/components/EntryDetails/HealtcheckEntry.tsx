import { HealthCheckEntry } from "../../types";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper, Box } from "@mui/material";

const HealthcheckComponent: React.FC<{ entry: HealthCheckEntry }> = ({
  entry,
}) => {
  const getIconColor = () => {
    switch (entry.healthCheckRating) {
      case 0:
        return "green";
      case 1:
        return "gold";
      case 2:
        return "orange";
      case 3:
        return "red";
      default:
        return "black";
    }
  };

  const iconColor = getIconColor();

  return (
    <Box
      border={1}
      borderColor="primary.main"
      borderRadius={1}
      marginBottom={2}
    >
      <Paper style={{ padding: "16px" }}>
        <p>
          {entry.date} <HealthAndSafetyIcon />
        </p>
        <p>
          Health Rating: <FavoriteIcon style={{ color: iconColor }} />
        </p>
        <p>
          <i>{entry.description}</i>
        </p>
        <p>diagnosed by {entry.specialist}</p>
      </Paper>
    </Box>
  );
};

export default HealthcheckComponent;
