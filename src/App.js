import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {db} from "./firebase.js";
import './App.css';
import Home from "./Home.js"
import Ecommerce from "./Ecommerce.js"


function App() {

 	return (
 		<Router>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/db-of-Cstmrs-of-the-curr-website' element={< Ecommerce />}></Route>
          </Routes>
       </Router>
	  );
	}

export default App;
