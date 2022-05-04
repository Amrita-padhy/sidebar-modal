import logo from './logo.svg';
import './App.css';
import Modal from './modal';
import Context from './context';
import Home from './home';
import SideBar from './sidebar';
import {links,social} from "./data"

function App() {
  return (
    <section>
    <Home/>
    <Modal/>
    <SideBar/>
    </section>
  );
}

export default App;
