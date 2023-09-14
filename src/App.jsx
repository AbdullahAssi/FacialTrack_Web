import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import { auth } from './Config/Firebase';
import Layout from './Pages/Layout';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Accordion from './Components/FAQs';
import Team from './Components/Team';
import Courses from './Components/Courses';
import Attandance from './Components/attandance';
import Schedule from './Components/Schedule';
import Calculator from './Components/Calculator';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route
            path="/"
            element={ <Layout /> }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<Accordion />} />
            <Route path="/team" element={<Team />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/attendance" element={<Attandance />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/calculator" element={<Calculator />} />
          </Route>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
