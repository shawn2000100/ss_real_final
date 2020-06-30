import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button
} from 'reactstrap';

import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {Auth, signInButton} from "aws-amplify";

import Log_in from 'components/Log_in.jsx';
import About from 'components/About.jsx';
import Activities from 'components/Activities.jsx';
import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';

const federated = {
    googleClientId: "967882595372-lh4onr61ms68l27vn9jsg3mulod4q7q0.apps.googleusercontent.com"
}

import './Main.css';
import './nvbar.css';
import './style.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: 'metric',
            navbarToggle: false,
            searchText: '',
            username: '',
        };
        this.searchEl = null;

        // this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        // this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        // this.handleClearSearch = this.handleClearSearch.bind(this);
        // this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleName = this.handleName.bind(this);
    }

    componentDidMount() {
        Auth.currentAuthenticatedUser().then(user =>{
            console.log(typeof user.username);
            console.log(user.name);
            this.setState((typeof user.username==='undefined')? {username: user.name}: {username: user.username}, ()=>{});
            console.log("username:");
            console.log(this.state.username);
        });
        // this.props.dispatch(Setuser((typeof user.username==='undefined')? user.name: user.username));
        if(this.state.username === ''){
            
        }else{
            
        }
    }


    render() {
        const greeting = "Hi, ";
        const login_notification = "Plz login.";
        return (
            <Router>
                <div className='main'>
                    <div className='bg-faded'>
                        {/* <div className='container'> */}
                        
                            <Navbar className="navbar-b navbar-trans navbar-expand-md fixed-top">
                                <NavbarToggler onClick={this.handleNavbarToggle}/>
                                <NavbarBrand className="intro-title" href="/">NTHU Lauguage Exchange</NavbarBrand>
                                <Collapse isOpen={this.props.navbarToggle} navbar>
                                    <Nav navbar className="page navbar-collapse collapse justify-content-end">
                                        <NavItem>
                                            <NavLink tag={Link} to='/'>Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/about'>About</NavLink>
                                        </NavItem>
                                        {/* <NavItem>
                                            <NavLink tag={Link} to='/log_in'>Log in</NavLink>
                                        </NavItem> */}
                                        <NavItem>
                                            <NavLink tag={Link} to='/activities'>Activities</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                                <div className="hello-user">
                                    <span className='span'> "Hello,{this.state.username}"</span>
                                
                                </div>
                                    <Button size='sm'variant="outline-primary" onClick={()=>{Auth.signOut().then(()=>{this.handleName}).then(()=>{window.location.reload()})}}>Sign Out</Button>
                            </Navbar>

                            {/* <img className="intro route bg-image" src={`images/landing_page_darker.jpg`}/> */}
                            
                        {/* </div> */}
                    </div>

                    <Route exact path="/" render={() => (
                        <Today/>
                    )}/>
                    {/* <Route exact path="/log_in" render={() => (
                        <Log_in screenProps={this.handleName} federated={federated}/>
                    )}/> */}
                    <Route exact path="/about" render={() => (
                        <About/>
                    )}/>
                    <Route exact path="/activities" render={() => (
                        <Activities username={this.state.username}/>
                    )}/>
                </div>
            </Router>
        );
    }

    handleName() {
        console.log("hello");
        // this.setState({
        //     username: ''
        // })
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    // handleSearchKeyPress(e) {
    //     var keyCode = e.keyCode || e.which;
    //     if (keyCode === 13){
    //         this.setState({
    //             searchText: e.target.value
    //         });
    //     }
    // }

    // handleClearSearch() {
    //     this.setState({
    //         searchText: ''
    //     });
    //     this.searchEl.value = '';
    // }

    // handleUnitChange(unit) {
    //     this.setState({
    //         unit: unit
    //     });
    // }
}

export default withAuthenticator(Main);

<div id="preloader"></div>