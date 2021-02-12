import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';

function TodoForm (props) {

const [item,setItem]=useState({});

 const handleInputChange = e => {
    setItem({...item,[e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const newitem = {};
    setItem(newitem);
  };

  
    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control  onChange={handleInputChange} type="text"  name="text" placeholder="Add To Do List Item" />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}type="range" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control  onChange={handleInputChange} type="text"  name="assignee" placeholder="Assigned To" />
        </Form.Group>
        <Button variant="primary" type="submit"> Add Item</Button>
      </Form>
      </>
    );
  }


export default TodoForm;
