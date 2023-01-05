import { useState } from "react";
import {db} from "./firebase.js";
import Home from "./Home.js"
import "./Ecommerce.css"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function Ecommerce() {

      const [datas,setDatas] = useState([]);


      const addItem = ()=>{
            datas.push("laptop");
            console.log(datas);
      }
      const add = ()=>{
            db.collection("order_datas").add({data: datas});
            setDatas([]);
      }



      return (
            <div className="Ecommerce">
                  <center><div className="add_to_cart_btn" onClick={add}>Add to cart</div></center>


                  <div className="products">
                        <div className="product p1">
                              <div className="add a1" onClick = { addItem }>Add</div>
                        </div>
                        <div className="product p2">
                              <div className="add a2" onClick = { addItem }>Add</div>
                        </div>
                        <div className="product p3">
                              <div className="add a3" onClick = { addItem }>Add</div>
                        </div>
                        <div className="product p3">
                              <div className="add a3" onClick = { addItem }>Add</div>
                        </div>
                  </div>
                  <div className="products">
                        <div className="product p1">
                              <div className="add a1" onClick = { addItem }>Add</div>
                        </div>
                        <div className="product p2">
                              <div className="add a2" onClick = { addItem }>Add</div>
                        </div>
                        <div className="product p3">
                              <div className="add a3" onClick = { addItem }>Add</div>
                        </div>
                        <div className="product p3">
                              <div className="add a3" onClick = { addItem }>Add</div>
                        </div>
                  </div>

            </div>
        );
      }

export default Ecommerce;
