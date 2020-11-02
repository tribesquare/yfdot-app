import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/HomeView/HomeView';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch> 
                <Route 
                    exact path="/" 
                    render={(props) => <Home {...props}  />} 
                />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
