import SearchMovie from './SearchMovie';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Watchlist from './pages/Watchlist';
import Welcome from './pages/Welcome';



function App() {
  
 

  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route exact path='/'>
            <Welcome  />
          </Route>
   
          <Route exact path='/welcome'>
            <Navbar  />
            <SearchMovie  />
          </Route>
          
          <Route exact path='/watchlist'>
            <Navbar  />
            <Watchlist   />
          </Route>

        </Switch>

      </Router>

    </div>

  );
}

export default App;

// make privateRoute if user is not signed in



