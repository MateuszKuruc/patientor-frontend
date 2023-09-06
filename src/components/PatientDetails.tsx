import { useParams } from "react-router-dom";
import patientService from "../services/patients";
import diagnosesService from "../services/diagnoses";
import { useEffect, useState } from "react";
import { Patient, Diagnosis } from "../types";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import EntryDetails from "./EntryDetails/EntryDetails";

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<null | Patient>(null);
  const [diagnoses, setDiagnoses] = useState<null | Diagnosis[]>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const fetchedPatient = await patientService.getPatientDetails(id);
          console.log("patient details", fetchedPatient);
          console.log("patient entries", fetchedPatient.entries);
          setPatient(fetchedPatient);
        }
      } catch (error) {
        console.error("Error fetching patient details:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDiagnoses = await diagnosesService.getAll();
        console.log("fetched diagnoses", fetchedDiagnoses);
        setDiagnoses(fetchedDiagnoses);
      } catch (error) {
        console.error("Error fetching diagnoses:", error);
      }
    };
    fetchData();
  }, [patient]);

  return (
    <div>
      {patient ? (
        <>
          <h2>
            {patient.name}
            {patient.gender === "female" ? <FemaleIcon /> : <MaleIcon />}
          </h2>
          <p>date of birth: {patient.dateOfBirth}</p>
          <p>ssn: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p>
          <h3>entries</h3>
          {patient.entries.map((entry) => (
            <EntryDetails entry={entry} />
          ))}
          {/* <EntryDetails /> */}
          {/* {patient.entries.map((p) => (
            <div key={p.id}>
              <p>
                {p.date} {p.description}
              </p>
              <ul>
                {p.diagnosisCodes?.map((d) => {
                  const diagnosis = diagnoses?.find(
                    (diagnosis) => diagnosis.code === d
                  );
                  const diagnosisName =
                    diagnosis?.name || "Diagnosis name not found";

                  return (
                    <li key={d}>
                      <span>
                        {d} {diagnosisName}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))} */}
        </>
      ) : (
        <p>Loading patient information...</p>
      )}
    </div>
  );
};

export default PatientDetails;
