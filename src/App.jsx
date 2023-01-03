import "./App.css";
import StartQuiz from "./container/StartQuiz";
import Home from "./container/Home";
import {Routes, Route} from "react-router-dom"
function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={ <StartQuiz />} />
      <Route path="/home/*" element={ <Home />} />
    </Routes>
   
    <Home />
    

  </div>;
}

export default App;
