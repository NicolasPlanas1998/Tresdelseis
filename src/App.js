import './App.css';
import {CartWidget, NavBar, Search} from './components/Header/Header'
import logo from './img/tresdelseis.png'
import {ItemListContainer} from './components/HomeView/HomeView'

function App() {
  return (
    <div className="App">
      <header class="header">
        <nav class="container__navBar">
          <NavBar/>
        </nav>
        <img id="logo" src={logo}/>
        <div class="container__widgets">
          <Search/>
          <CartWidget/>
          
        </div>
      </header>
      <section>
        <ItemListContainer/>
      </section>
    </div>
  );
}

export default App;
