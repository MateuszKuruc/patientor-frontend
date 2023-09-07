import { SyntheticEvent, useState } from "react";

const EntryCreator = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState("");
  const [healthCheckRating, setHealthCheckRating] = useState("");

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>Add new entry</h3>
      <form onSubmit={addEntry}>
        <div>description:  
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        </div>
        <div>date: 
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        </div>
        <div> specialist: 
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        </div>
        <div> diagnosis codes: 
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        </div>
        <div> health rating: 
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        </div>
        
        <button type="submit">Add entry</button>
      </form>
    </div>
  );
};

export default EntryCreator;
