import Header from "./components/Header";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom"
import Home from "./page/Home"
import CreatePost from "./page/CreatePost";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePost/>}/>
      </Routes>
    </Router>
  );
}

export default App;
