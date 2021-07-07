import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import TokenProvider from './context/TokenContext';
import Registro from './pages/Registro';

function App() {




  return (
    
    <TokenProvider>

    <div>

          <Router>
              <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registro" component={Registro} />
                    <Route path="*" component={Error404}/>           
            </Switch>
          </Router>
  
    </div>
    
    </TokenProvider>
  );
}

export default App;
