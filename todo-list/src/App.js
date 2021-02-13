
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo';
import ThemeProvider from './components/context/settings';
import './App.css';
import Settings from './components/setting.js';

export default class App extends React.Component {
  render() {
    return (
      <>
      <ThemeProvider>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
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