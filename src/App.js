import { useState } from "react";
import "./App.css";
import dataContacts from "./contacts.json";

function App() {
  const fiveGuys = dataContacts.slice(0, 5);
  const [contacts, setContacts] = useState([fiveGuys]);
  const [contactListNew, setContactListNew] = useState(contacts.slice(5));
  // console.log(contacts);

  const addRandomContact = () => {
    let contactID = contacts.map((e) => e.id);
    let filterContact = dataContacts.filter(
      (e) => !contactID.includes(e.id) && e
    );
    let randomIndex = Math.floor(Math.random() * filterContact.length);
    let newState = [...contacts]; //copie du state ou on push un elem de contactfilter a lindex random
    newState.push(filterContact[randomIndex]);
    setContacts(newState);
  };
  const sortPopu = () => {
    const copyPopu = [...contacts];
    copyPopu.sort((a, b) => {
      return b.copyPopu - a.copyPopu;
    });
    setContacts(copyPopu);
  };
  // copi du state a mettre jour=> state=copy du state mis a jour
  const sortName = () => {
    const sortContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));
    setContactListNew(sortContacts);
    const randomIndex = Math.floor(Math.random() * contactListNew.length);
    setContactListNew(contactListNew.filter((elem) => elem !== randomIndex));
  };

  // ITERATION 3

  // *recuperer l'ID dans le state (qui correspond à la liste des contacts deja affichés (les 5 au debut) =>map dessus)

  // *on filtre la liste totale (dataContact) (filter retourne un tableau selon les conditions on va trouver tous les id qui sont dans la liste et ne pas retourner ceux deja affichés = ceux du state avec include
  //et pour choisir au hasard on crée un index random)
  //si l'id de chaque element (contactID) n'est pas deja affiché (càd qui n'est pas dans les five au début)
  // alors on le rajoute au state avec setContacts

  // *on a besoin de créer une copie du state (contacts qui au début est les 5premiers)
  // et on va push dans cette copie le nouveau contact
  // *ce nouveau tableau (copie màj) est le nouveau state (=>setContacts=nouveau tableau)

  return (
    <div className="App">
      <h1>IronCONTACTS</h1>
      <button className="btn" onClick={() => addRandomContact()}>
        Add Random Contact
      </button>
      <button className="btn" onClick={() => sortPopu()}>
        Sort by Popularity
      </button>
      <button className="btn" onClick={sortName}>
        Sort by Name
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emy</th>
            <th className="deleteCell"> </th>
          </tr>
        </thead>
        <tbody>
          {console.log(contacts)}
          {contacts.map((e) => (
            <tr key={e.id}>
              <td>
                <img className="picture" src={e.pictureUrl} alt="pic contact" />
              </td>
              <td>{e.name}</td>
              <td>{e.popularity}</td>
              <td>{e.wonEmmy ? "yes" : "no"}</td>
              <td>{e.wonOscar ? "yes" : "no"}</td>
              <td className="deleteCell">
                <button className="btn-delete">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
