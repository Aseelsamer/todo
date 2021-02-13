import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import { Container, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap';
import useAjax from './hooks/useAjax';
import useForm from './hooks/useForm';
import useList from './hooks/useList';


const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';


function ToDo(props) {
  
  const [list,setList,handleInputChange,handleSubmit] = useForm();
  const [handler,todoAPI] = useAjax();
  const [loader,toggleComplete,deleteItem] = useList(handler,todoAPI,setList,list);

  useEffect(() => {
    loader()
  }, []);

  useEffect(() => {
    let completeNum = 0;
    list.forEach(item => {
      if (item.complete) { completeNum++ }
    })
    document.title = `${completeNum}/${list.length} Tasks `;
    
  }, [list])
 
  return (
    <React.Fragment>
     <section className="todo">
       <Container>
         <Row>
           <Col>
             <Alert className="black-alert">
               <h4>
                 There are {list.filter((item) => !item.complete).length} Items
                 To Complete
               </h4>
             </Alert>
           </Col>
         </Row>
         <Row>
           <Col md="4">
             <div>
               <TodoForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
             </div>
           </Col>
           <Col md="8">
             <div>
               <TodoList
                 list={list}
                 handleComplete={toggleComplete}
                 handleDelete={deleteItem}
               />
             </div>
           </Col>
         </Row>
       </Container>
     </section>
     {/* <section>
       <Settings/>
     </section> */}
   </React.Fragment>
  );
}

export default ToDo;