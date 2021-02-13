  
import React from 'react';
import Show from './show';
import {AuthContext} from './components/context/authContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import SettingsProvider from './components/context/settings';
import Settings from './components/setting';

class Login extends React.Component {

    static contextType = AuthContext; // I have access to this.context

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        // from the context do login
        console.log("this context----> ", this.context);
        this.context.login(this.state.username, this.state.password);
    }


    render() {
        return (
            <>
            <SettingsProvider>
            <Show condition={!this.context.loggedIn}>
             <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Brand>

            <Form condition={!this.context.loggedIn} onSubmit={this.handleSubmit} inline>
              <FormControl onChange={this.handleChange} type="text" placeholder="Username" className="mr-sm-2" name="username" />
              <FormControl onChange={this.handleChange}type="password" placeholder="Password" className="mr-sm-2" name="password" />
              <Button type="submit" variant="dark">login</Button>
            </Form>
          </Navbar>
         
        </Show>
        <Show condition={this.context.loggedIn}>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Brand>
            <Form inline>
              <Button variant="dark" onClick={this.context.logout}>logout</Button>
            </Form>
          </Navbar>
          <ToDo />
          <section>
            <Settings />
          </section>
        </Show>
      </SettingsProvider>
      </>
     )
    }
}

export default Login;