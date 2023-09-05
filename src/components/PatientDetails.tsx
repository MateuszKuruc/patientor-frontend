import { useParams } from "react-router-dom";
import patientService from "../services/patients";
import { useEffect, useState } from "react";
import { Patient } from "../types";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<null | Patient>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const fetchedPatient = await patientService.getPatientDetails(id);
          console.log("patient details", fetchedPatient);
          setPatient(fetchedPatient);
        }
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {patient ? (
        <>
          <h3>
            {patient.name}
            {patient.gender === "female" ? <FemaleIcon /> : <MaleIcon />}
          </h3>
        </>
      ) : (
        <p>Loading patient information...</p>
      )}
    </div>
  );
};

export default PatientDetails;
