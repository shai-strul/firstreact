import { HashRouter,Routes,Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
// import About from "./components/About";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="signin" element={<SignIn/>} />
          {/* <Route path="about" element={<About/>} /> */}
        </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
