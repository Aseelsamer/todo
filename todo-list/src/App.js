
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo';
import ThemeProvider from './components/context/settings';
import './App.css';
import Settings from './components/setting.js';
import AuthProvider from './components/context/authContext'
import Login from './login';

export default class App extends React.Component {
  render() {
    return (
      <>
        <AuthProvider>
      <Login/>
      
    </AuthProvider>
      <ThemeProvider>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          
        </Navbar>

        <ToDo />
        <section>
          <Settings/>
        </section>
        </ThemeProvider>
      
      </>
    );
  }
}