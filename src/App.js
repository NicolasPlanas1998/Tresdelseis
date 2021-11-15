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
import { Checkout } from './components/Checkout/Checkout';
import { UserManager } from './components/UserManager/UserManager';


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
              <Route exact path="/productos">
                <ItemListContainer/>
              </Route>
              <Route path="/productos/:categoryId">
                <ItemListContainer/>
              </Route>
              <Route path="/:categoryId/:productId">
                <ItemDetailContainer/>
              </Route>
              <Route path="/checkout">
                <Checkout/>
              </Route>             
              <Route exact path="/contacto">
                <Form/>
              </Route>
              <Route path="/cart">
                <CartScreen/>
              </Route> 
              <Route path="/login">
                <UserManager/>
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
