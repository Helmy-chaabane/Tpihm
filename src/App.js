import { Route, Switch } from "react-router";
import Login from "./Pages/Login/Login";
import Main from "./Components/MainContent/Main";
import Acceuil from "./Pages/Acceuil/Acceuil";
import Movie from "./Pages/Movie/Movie";
import MyMovies from "./Pages/MyMovies/MyMovies";
import Actors from "./Pages/Actors/Actors";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/movie/:id"
          exact
          render={(props) => {
            return <Main component={Movie} {...props} />;
          }}
        />
        <Route
          path="/mymovies"
          exact
          render={(props) => {
            return <Main component={MyMovies} {...props} />;
          }}
        />
        <Route
          path="/"
          exact
          render={(props) => {
            return <Main component={Acceuil} {...props} />;
          }}
        />
        <Route
          path="/actors"
          exact
          render={(props) => {
            return <Main component={Actors} {...props} />;
          }}
        />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
