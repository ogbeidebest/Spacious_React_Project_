import Navbar from './Components/Navbar';
import Navs from './Components/Navs';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';
import PlanetList from './Components/PlanetList';
import { Switch } from 'react-router';
import PlanetApp from './Components/PlanetApp';
import Charater from './Components/Charater';
import CharaterList from './Components/CharaterList';





function App() {

  return (<HashRouter>
    <div className="App" >

      <Navbar />
      <Navs />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <PlanetList />
          </Route >
          <Route exact path="/CharaterList">
            <CharaterList />
          </Route >

          <Route exact path="/PlanetApp">
            <PlanetApp />
          </Route >
          <Route exact path="/Charater">
            <Charater />
          </Route >
        </Switch>
      </div>
    </div>

  </HashRouter >

  )
}

export default App;