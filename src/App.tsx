import React, { useState, createContext } from 'react';
import './App.scss';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import ReactSwitch from 'react-switch';
import SimplePlanner from './components/SimplePlanner/SimplePlanner';
import SecondPlanner from './components/SecondPlanner/SecondPlanner';
import ThirdPlanner from './components/ThirdPlanner/ThirdPlanner';
import FourthPlanner from './components/FourthPlanner/FourthPlanner';
import FifthPlanner from './components/FifthPlanner/FifthPlanner';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <section>
      <ThemeContext.Provider value={null}>
        <ReactSwitch className="switch" checked={theme === 'dark'} onChange={toggleTheme} />
        <div id={theme}>
          <div className="container body-color">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <SimplePlanner />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <SecondPlanner />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ThirdPlanner />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FourthPlanner />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <FifthPlanner />
              </div>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
