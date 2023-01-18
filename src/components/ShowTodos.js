import React from 'react'
import Form from './Form'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ShowTodos({allNotes, setAllNotes}) {

    const handleDeleteTodo = (index) =>{
        const newTodos = [...allNotes];
        newTodos.splice(index, 1)
        setAllNotes(newTodos)
        console.log(index)
    }
    
  return (
    <div className='mt-4'>
        {allNotes.map((item, index)=>(
    <Card className='p-3 mt-4 d-flex justify-content-between' key={index}>
      <span className='text-center '>{item}</span>
      <Button onClick={()=>{handleDeleteTodo(index)}} variant="danger">Delete</Button>
    </Card>
        ))}
    </div>
  );


  
}

export default ShowTodos
