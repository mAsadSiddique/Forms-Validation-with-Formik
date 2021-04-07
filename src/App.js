import React from 'react';
import './App.css';
// import Formik from './Components/Formik/Formik';
import FormWithYup from './Components/Yup/FormWithYup';

function App() {
  return (
    <div className="App">
      <h2>Login Updated</h2>
      {/* <Formik /> */}
      < FormWithYup />
    </div>
  );
}

export default App;
