import './App.css';
import { Header } from './components/Header/Header';
import { HomeView } from './components/HomeView/HomeView';
import { Form } from './components/Forms/Forms';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {CartScreen} from './components/CartScreen/CartScreen'
import { CartProvider} from './context/CartContext'
import {UIProvider } from './context/UIContext';


function App() {


  return (
    <>
      <UIProvider>
        <CartProvider>
          <Router>
          <div className="contenedor"> 
            <Header/>   
              <Switch>
                <Route exact path="/">
                <HomeView/>
                </Route>
                <Route path="/productos/:categoryId">
                  <ItemListContainer/>
                </Route>
                <Route path="/:categoryId/:productId">
                  <ItemDetailContainer/>
                </Route>           
                <Route exact path="/nuevo">
                  <h2>Nuevo</h2>
                  <h3>Estamos trabajando en esta seccion...</h3>
                </Route>
                <Route exact path="/contacto">
                  <Form/>
                </Route>
                <Route path="/cart">
                  <CartScreen/>
                </Route> 
              </Switch>
              </div>
          </Router>
        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
