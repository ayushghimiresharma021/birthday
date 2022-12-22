import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Data_person from './Data'

function List(){
  const [people,setPeople] = useState(Data_person)
  return (
    <main>
      <section className='container'>
        <h3>{people.length}</h3>
        <App people={people} />
        <button onClick={ () => setPeople([])}>On Click</button>
      </section>
    </main>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List />
  </React.StrictMode>
);


