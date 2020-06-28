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

import Log_in from 'components/Log_in.jsx';
import About from 'components/About.jsx';
import Activities from 'components/Activities.jsx';
import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: 'metric',
            navbarToggle: false,
            searchText: ''
        };
        this.searchEl = null;

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
    }

    render() {
        return (
            <Router>
                <div className='main'>
                    <div className='bg-faded'>
                        {/* <div className='container'> */}
                            <Navbar color='white faded' light expand>
                                <NavbarToggler onClick={this.handleNavbarToggle}/>
                                <NavbarBrand className='text-info' href="/">NTHU Lauguage Exchange</NavbarBrand>
                                <Collapse isOpen={this.props.navbarToggle} navbar>
                                    <Nav navbar className="page">
                                        <NavItem>
                                            <NavLink tag={Link} to='/'>Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/about'>About</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/log_in'>Log in</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/activities'>Activities</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        {/* </div> */}
                    </div>

                    <Route exact path="/" render={() => (
                        <Today />
                    )}/>
                    <Route exact path="/log_in" render={() => (
                        <Log_in />
                    )}/>
                    <Route exact path="/about" render={() => (
                        <About />
                    )}/>
                    <Route exact path="/activities" render={() => (
                        <Activities />
                    )}/>
                </div>
            </Router>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

    handleSearchKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){
            this.setState({
                searchText: e.target.value
            });
        }
    }

    handleClearSearch() {
        this.setState({
            searchText: ''
        });
        this.searchEl.value = '';
    }

    handleUnitChange(unit) {
        this.setState({
            unit: unit
        });
    }
}
