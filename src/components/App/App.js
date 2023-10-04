import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../Details/DetailsPage';



function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router> 
        <Switch>   
        <Route path='/' exact>
          <MovieList />
        </Route>
    
        <Route path="/MovieList/:movieId" component={DetailsPage} />

        </Switch>   
      </Router>
    </div>
  );
}


export default App;
