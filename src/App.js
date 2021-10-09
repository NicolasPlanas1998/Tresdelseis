import './App.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <section>
        <ItemListContainer/>
      </section>
    </div>
  );
}

export default App;
