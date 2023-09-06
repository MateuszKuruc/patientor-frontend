import { HealthCheckEntry } from "../../types";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HealthcheckComponent: React.FC<{ entry: HealthCheckEntry }> = ({
  entry,
}) => {
  //   const healtCheckRating = entry.healthCheckRating;
  // const getIconColor = () => {
  //     switch(entry.)
  // }
  return (
    <div>
      <p>
        {entry.date} <HealthAndSafetyIcon />
      </p>

      {entry.description}
    </div>
  );
};

export default HealthcheckComponent;
