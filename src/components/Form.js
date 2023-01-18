
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import ShowTodos from './ShowTodos';
function Form() {

    const [input, setInput] = useState("")
    const [allNotes, setAllNotes] = useState([])

    const handleInputField = (e) =>{
        e.preventDefault();
        if(input){
           allNotes.push(input)
           //localStorage.setItem("allNotes", JSON.stringify(allNotes))
        setInput("") 
        }   
    }

    useEffect(() => {
      //const items = JSON.parse(localStorage.getItem("allNotes"))
      //if (items) {
        //setAllNotes(items)
      //}
    },)

    const handleTest = (e) =>{
        setInput(e.target.value)
    }

  return (
    <div className='bg-dark p-3 rounded'>
    <form onSubmit={handleInputField} className='d-flex justify-content-center'>
    <input className='me-3' onChange={handleTest} value={input} type="text" />
    <Button variant="primary" type='submit'>Post</Button>
    </form>
    <ShowTodos allNotes={allNotes} setAllNotes={setAllNotes}/>
    </div>
    
  )
}

export default Form
