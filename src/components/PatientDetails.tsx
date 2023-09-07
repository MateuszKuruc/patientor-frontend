import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Male, Female, QuestionMark } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { getErrorMessage } from "../util";

import { Patient, Gender, Diagnosis, EntryFormValues } from "../types";

// import EntryInfo from "./EntryInfo";
import AddEntryForm from "./EntryCreator";

import patientService from "../services/patients";
// import diagnosesService from "../services/diagnoses";
// import { useEffect, useState } from "react";
// import { Patient, Diagnosis } from "../types";
// import FemaleIcon from "@mui/icons-material/Female";
// import MaleIcon from "@mui/icons-material/Male";
import EntryDetails from "./EntryDetails/EntryDetails";
// import EntryCreator from "./EntryCreator";

type Props = {
  diagnoses: Diagnosis[];
};

const PatientPage = ({ diagnoses }: Props) => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [formVisible, setFormVisible] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getGenderIcon = (gender: Gender) => {
    if (gender === Gender.Male) {
      return <Male />;
    }

    if (gender === Gender.Female) {
      return <Female />;
    }

    return <QuestionMark />;
  };

  const id = useParams().id;

  useEffect(() => {
    if (id) {
      void patientService.getPatientDetails(id).then((data) => {
        setPatient(data);
      });
    }
  }, [id]);

  const onNewEntry = async (values: EntryFormValues, resetter: () => void) => {
    if (!patient) return null;
    try {
      const updatedPatient = await patientService.addEntry(patient.id, values);
      setPatient(updatedPatient);
      setFormVisible(false);
      setError(null);
      resetter();
    } catch (e: unknown) {
      const message = getErrorMessage(e);
      setError(message);
    }
  };

  const closeForm = () => {
    setFormVisible(false);
    setError(null);
  };

  if (!patient) return null;

  return (
    <div>
      <h3>
        {patient.name} {getGenderIcon(patient.gender)}
      </h3>

      <div>ssn {patient.ssn}</div>
      <div>occupation: {patient.occupation}</div>

      {error && <Alert severity="error">{error}</Alert>}

      <AddEntryForm
        onSubmit={onNewEntry}
        visible={formVisible}
        onOpen={() => setFormVisible(true)}
        onCancel={closeForm}
        diagnoses={diagnoses}
      />

      <h4>entries</h4>

      {patient.entries?.map((e) => (
        <EntryDetails key={e.id} entry={e} />
      ))}
    </div>
  );
};

export default PatientPage;

// import { useParams } from "react-router-dom";
// import patientService from "../services/patients";
// import diagnosesService from "../services/diagnoses";
// import { useEffect, useState } from "react";
// import { Patient, Diagnosis } from "../types";
// import FemaleIcon from "@mui/icons-material/Female";
// import MaleIcon from "@mui/icons-material/Male";
// import EntryDetails from "./EntryDetails/EntryDetails";
// import EntryCreator from "./EntryCreator";

// const PatientDetails = () => {
//   const { id } = useParams();
//   const [patient, setPatient] = useState<null | Patient>(null);
//   const [diagnoses, setDiagnoses] = useState<null | Diagnosis[]>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (id) {
//           const fetchedPatient = await patientService.getPatientDetails(id);
//           console.log("patient details", fetchedPatient);
//           console.log("patient entries", fetchedPatient.entries);
//           setPatient(fetchedPatient);
//         }
//       } catch (error) {
//         console.error("Error fetching patient details:", error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fetchedDiagnoses = await diagnosesService.getAll();
//         console.log("fetched diagnoses", fetchedDiagnoses);
//         setDiagnoses(fetchedDiagnoses);
//       } catch (error) {
//         console.error("Error fetching diagnoses:", error);
//       }
//     };
//     fetchData();
//   }, [patient]);

//   return (
//     <div>
//       {patient ? (
//         <>
//           <h2>
//             {patient.name}
//             {patient.gender === "female" ? <FemaleIcon /> : <MaleIcon />}
//           </h2>
//           <p>date of birth: {patient.dateOfBirth}</p>
//           <p>ssn: {patient.ssn}</p>
//           <p>occupation: {patient.occupation}</p>
//           <EntryCreator />

//           <h3>entries</h3>
//           {patient.entries.map((entry) => (
//             <EntryDetails key={entry.id} entry={entry} />
//           ))}
//         </>
//       ) : (
//         <p>Loading patient information...</p>
//       )}
//     </div>
//   );
// };

// export default PatientDetails;
