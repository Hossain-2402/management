import React, { useState,useEffect } from "react";
import './App.css';
import db from "./firebase";


function App() {
	const [todos,setTodos] = useState(["Macbook","Iphone"]);
	const [checkboxColor,setCheckboxColor] = useState("#4d4d4d");
  	
  	const selectItem = ()=>{

  	}

 	return (
	    <div className="App">
	      {
	      	todos.map((todo,index)=>{
	      		return (
	      			<div className="todoArea">
		      			<div className="todo">
		      			{todo}
		      			</div>
		      			<div className="checkbox" onClick={selectItem}></div>
	      			</div>
	      			)})
	      }
	    </div>
	  );
	}

export default App;
