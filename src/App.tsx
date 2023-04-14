import React from 'react';
import './App.css';
import ExportTable, { UserData } from './components/ExportTable';

const heroes: UserData[] = [
  {
    userId: 1,
    username: "Captain Chuckles",
    userEmail: "captain.chuckles@superheromail.com",
  },
  {
    userId: 2,
    username: "The Giggle Guru",
    userEmail: "giggle.guru@superheromail.com",
  },
  {
    userId: 3,
    username: "Mirthful Mantis",
    userEmail: "mirthful.mantis@superheromail.com",
  },
  {
    userId: 4,
    username: "Doctor Puns",
    userEmail: "doctor.puns@superheromail.com",
  },
  {
    userId: 5,
    username: "Snicker Siren",
    userEmail: "snicker.siren@superheromail.com",
  },
  {
    userId: 6,
    username: "LOL Llama",
    userEmail: "lol.llama@superheromail.com",
  },
  {
    userId: 7,
    username: "Smirk Spectre",
    userEmail: "smirk.spectre@superheromail.com",
  },
  {
    userId: 8,
    username: "Grin Guardian",
    userEmail: "grin.guardian@superheromail.com",
  },
  {
    userId: 9,
    username: "Chortle Cheetah",
    userEmail: "chortle.cheetah@superheromail.com",
  },
  {
    userId: 10,
    username: "The Hilarity Hero",
    userEmail: "hilarity.hero@superheromail.com",
  },
];

function App() {
  return (
    <div className="App">
      <ExportTable userData={heroes} />
    </div>
  );
}

export default App;
