import React, { useState,useEffect } from "react";
import './Home.css';
import {db} from "./firebase.js";


function Home() {


	const [todos,setTodos] = useState([]);
	const [opacity,setOpacity] = useState(0);
	const [width,setWidth] = useState("0vw");

  	useEffect(()=>{
		db.collection("things").orderBy("index","asc").onSnapshot(snapshot=>{
   		   setTodos(snapshot.docs.map(doc=>({id:doc.id,index:doc.data().index,thing:doc.data().thing})));
   		 });
	},[]);

  	const addItem = ()=>{
  		let lastIndex = todos.length - 1;
  		db.collection("things").add({
  				index : (lastIndex+1),
  				thing: "Something"
			});
  	}

 	return (
	    <div className="Home">
	    <link rel="styleSheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
	      <center><div className="addItemBtn" onClick={addItem} >Add Item</div></center>
	     <div>
	      {
	      	todos.map((item,position)=>{
	      		return(
	      			<div>
		      			<div>
			      			<div key={position} className="item" >{item.thing}
			      			</div>
			      			<div className="displayBtn" onClick={()=>{ setOpacity(1) ; setWidth("75vw")}}>Display</div>
		      			</div>
	      			</div>
	      			)})
	      }

	      </div>
		  <center><div style={{opacity : opacity, width: width}} className="displayArea">
			<div className="crossBtn" onClick={()=>{ setOpacity(0); setWidth("0vw"); }}><i class="fa fa-times" ></i></div>
		  </div></center>

	    </div>
	  );
	}

export default Home;
