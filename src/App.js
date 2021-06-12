import SearchMovie from './SearchMovie';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched'
// import MovieState from './context_watchlist/movieDataBase/MovieState';
import Welcome from './pages/Welcome';




function App() {
  return (
    <div className="App">
      <Router>
        

        <Switch>
          <Router exact path='/welcome'>
            <Welcome  />
          </Router>

          <Route exact path='/'>
            <Navbar  />
            <SearchMovie  />
          </Route>
          
          <Route exact path='/watchlist'>
            <Navbar  />
            <Watchlist   />
          </Route>

          <Route exact path='/watched'>
            <Navbar  />
            <Watched  />
          </Route>

        </Switch>

      </Router>

    </div>

  );
}

export default App;

// add a filter by genre function as well
// save search result in session storage so it does not looses its searched result