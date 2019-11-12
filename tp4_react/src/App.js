import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Profil.js'
import Navigation from './navigation.js'

function App() {
  return (
    <div>

      <Profil prenom="Thomas" />
      <Navigation />
    </div>
  );
}



export default App;
