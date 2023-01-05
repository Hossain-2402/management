import {db} from "./firebase.js";
import Home from "./Home.js"
import "./Ecommerce.css"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function Ecommerce() {

 	return (
            <div className="Ecommerce">
                  <center><div className="add_to_cart_btn">Add to cart</div></center>


                  <div className="products">
                        <div className="product p1">
                              <div className="add">Add</div>
                        </div>
                        <div className="product p2">
                              <div className="add">Add</div>
                        </div>
                        <div className="product p3">
                              <div className="add">Add</div>
                        </div>
                        <div className="product p4">
                              <div className="add">Add</div>
                        </div>
                        <div className="product p5">
                              <div className="add">Add</div>
                        </div>
                  </div>

            </div>
	  );
	}

export default Ecommerce;
