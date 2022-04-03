import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/home/Home';
import Header from './pages/shared/header/Header';
// import Popup from './pages/shared/popup/Popup';


const App = () => {
  return (
    <div className="wrapp">
      {/* <Popup /> */}
      <div className="app__container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/month-statistics" exact component={MonthStatistics} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default App;
