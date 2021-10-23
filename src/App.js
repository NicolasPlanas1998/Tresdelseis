import './App.css';
import { Header } from './components/Header/Header';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <header>
          <Header/>
        </header>
        <div className="contenedor">      
          <Switch>
            <Route exact path="/">
              <HomeView/>
            </Route>
            <Route path="/productos/:categoryId">
              <ItemListContainer/>
            </Route>            
            <Route exact path="/nuevo">
              <h2>Nuevo</h2>
              <h3>Estamos trabajando en esta seccion...</h3>
            </Route>
            
            <Route exact path="/contacto">
              <h2>Contacto</h2>
              <h3>Estamos trabajando en esta seccion...</h3>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
