import SearchMovie from './SearchMovie';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched'
import MovieState from './context/movieDataBase/MovieState';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar  />

        <Switch>
          <Route exact path='/'>
            <SearchMovie  />
          </Route>
          
          <Route exact path='/watchlist'>
            <Watchlist   />
          </Route>

          <Route exact path='/watched'>
            <Watched  />
          </Route>

        </Switch>

      </Router>

    </div>

  );
}

export default App;
