import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import { Container, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap';
import useAjax from '../hooks/useAjax';
import axios from 'axios';

const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';

function ToDo(props) {
  const [list, setList] = useState([]);

  const itemCb = function(data) {
    setList(data);
  }

  const [useAxios, response] = useAjax(itemCb);

  useEffect(()=> {
    console.log("in use effect !!")
    
    if(response.result) {
      console.log("useEffect @@@@@@@response.results@@@@")
      setList(response.result);
    } else {
      console.log("useEffect in the else part!! ")
      _getTodoItems()
    }
  }, [response]);


  const _addItem = async (item) => {
    console.log("add item !!! , ", item)
    item = { ...item, complete: false };
    console.log(item);
  
    useAxios({
      method: 'post',
      url: todoAPI,
      data: JSON.stringify(item),
      headers: { 
        'Content-Type':'application/json'
      }
    });
  };
  
  const _toggleComplete = async (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    item.complete = !item.complete;
    //   setRequestParams('post', null, JSON.stringify(item), id);
    //   let updatedItem = await useAxios();

    //   setList(
    //     list.map((listItem) =>
    //       updatedItem._id === listItem._id ? updatedItem : listItem
    //     )
    //   );

    let url = `${todoAPI}/${item._id}`;
    fetch(url, {
      method: 'put',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then((data) => data.json())
      .then((updatedItem) =>
        setList(
          list.map((listItem) =>
            updatedItem._id === listItem._id ? updatedItem : listItem
          )
        )
      )
      .catch(console.error);
  };

  const _deleteItem = (id) => {
    let url = `${todoAPI}/${id}`;
    fetch(url, {
      method: 'delete',
      mode: 'cors',
    })
      .then((data) => data.json())
      .then((deleteddItem) => {
        let result = [];
        list.forEach((listItem) => {
          if (listItem._id !== deleteddItem._id) result.push(listItem);
        });
        setList(result);
      })
      .catch(console.error);
  };

  const _getTodoItems = () => {
    
    useAxios({
      url: todoAPI
    });
  };

  useEffect(_getTodoItems, []);

  return (
    <React.Fragment>
      <Navbar bg="primary" variant="light" sticky="top">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar>

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
                <TodoForm handleSubmit={_addItem} />
              </div>
            </Col>
            <Col md="8">
              <div>
                <TodoList
                  list={list}
                  handleComplete={_toggleComplete}
                  handleDelete={_deleteItem}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default ToDo;

// import React, { useEffect, useState } from 'react';
// import TodoForm from './form.js';
// import TodoList from './list.js';
// import axios from 'axios';

// import './todo.scss';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


// const ToDo = () => {

//   // const [list, setList] = useState([]);

//   const _addItem = (item) => {
//     item.due = new Date();
//     postNote(todoAPI,item)
    
//     // fetch(todoAPI, {
//     //   method: 'post',
//     //   mode: 'cors',
//     //   cache: 'no-cache',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(item)
//     // })
//     //   .then(response => response.json())
//     //   .then(savedItem => {
//     //     setList([...list, savedItem])
//     //   })
//     //   .catch(console.error);
//   };

//   const _toggleComplete = id => {

//     let item = list.filter(i => i._id === id)[0] || {};

//     if (item._id) {

//       item.complete = !item.complete;

//       let url = `${todoAPI}/${id}`;

//       fetch(url, {
//         method: 'put',
//         mode: 'cors',
//         cache: 'no-cache',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(item)
//       })
//         .then(response => response.json())
//         .then(savedItem => {
//           setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
//         })
//         .catch(console.error);
//     }
//   };

//   const _getTodoItems = () => {
//     // fetch(todoAPI, {
//     //   method: 'get',
//     //   mode: 'cors',
//     // })
//     //   .then(data => data.json())
//     //   .then(data => setList(data.results))
//     //   .catch(console.error);
//     const data = getNote(todoAPI);
//     console.log('------------',data)
//     setList(data);
//   };

//   useEffect(_getTodoItems, []);

//   return (
//     <>
//       <header>
//         <h2>
//           There are {list.filter(item => !item.complete).length} Items To Complete
//         </h2>
//       </header>

//       <section className="todo">

//         <div>
//           <TodoForm handleSubmit={_addItem} />
//         </div>

//         <div>
//           <TodoList
//             list={list}
//             handleComplete={_toggleComplete}
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default ToDo;
