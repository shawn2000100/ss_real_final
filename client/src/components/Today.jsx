import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Alert,
  } from "reactstrap";

import WeatherDisplay from 'components/WeatherDisplay.jsx';
import WeatherForm from 'components/WeatherForm.jsx';
import PostForm from 'components/PostForm.jsx';
import PostList from 'components/PostList.jsx';
import {getWeather, cancelWeather} from 'api/open-weather-map.js';
import {listPosts, createPost, createVote} from 'api/posts.js';

import './Today.css';

export default class Today extends React.Component {
    static propTypes = {
        unit: PropTypes.string,
        searchText: PropTypes.string,
        onUnitChange: PropTypes.func
    };

    static getInitWeatherState() {
        return {
            city: 'na',
            code: -1,
            group: 'na',
            description: 'N/A',
            temp: NaN
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            ...Today.getInitWeatherState(),
            weatherLoading: false,
            masking: false,
            postLoading: false,
            posts: [],
            hasMore: true
        };

        this.handleWeatherQuery = this.handleWeatherQuery.bind(this);
        this.handleCreatePost = this.handleCreatePost.bind(this);
        this.handleCreateVote = this.handleCreateVote.bind(this);
        this.listMorePosts = this.listMorePosts.bind(this);
    }

    componentDidMount() {
        this.getWeather('Hsinchu', this.props.unit);
        this.listPosts(this.props.searchText);
    }

    componentWillUnmount() {
        if (this.state.weatherLoading) {
            cancelWeather();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchText !== this.props.searchText) {
            this.listPosts(nextProps.searchText);
        }
    }

    render() {
        const {unit} = this.props;
        const {group, city, masking, posts, postLoading} = this.state;

        // document.body.className = `weather-bg ${group}`;
        // document.querySelector('.weather-bg .mask').className = `mask ${masking ? 'masking' : ''}`;

        return (
            <div className='today'>
                <div className="section section-team text-center" style={{backgroundColor:'white'}}>
                    {/* <Container> */}
                        <div className="team">
                        <img className="bg-image" src={`images/landing_page_darker.jpg`}/>
                        <h2 className="title">Coming soon</h2>
                        <Row>
                            <Col md="4">
                            <div className="team-player">
                            <img className="bg-image" src={`images/ryan.jpg`}/>
                                <h4 className="title">Romina Hadid</h4>
                                <p className="category text-info">Model</p>
                                <p className="description">
                                You can write here details about one of your team members.
                                You can give more details about what they do. Feel free to
                                add some{" "}
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    links
                                </a>{" "}
                                for people to be able to follow them outside the site.
                                </p>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="team-player">
                                <img className="bg-image" src={`images/ryan.jpg`}/>
                                <h4 className="title">Ryan Tompson</h4>
                                <p className="category text-info">Designer</p>
                                <p className="description">
                                You can write here details about one of your team members.
                                You can give more details about what they do. Feel free to
                                add some{" "}
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    links
                                </a>{" "}
                                for people to be able to follow them outside the site.
                                </p>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="team-player">
                            <img className="bg-image" src={`images/ryan.jpg`}/>
                                <h4 className="title">Eva Jenner</h4>
                                <p className="category text-info">Fashion</p>
                                <p className="description">
                                You can write here details about one of your team members.
                                You can give more details about what they do. Feel free to
                                add some{" "}
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    links
                                </a>{" "}
                                for people to be able to follow them outside the site.
                                </p>
                            </div>
                            </Col>
                        </Row>
                        </div>
                    {/* </Container> */}
                    <h2 className="title">WHAT YOU CAN EXPECT</h2>
                    <Container>
                        <div className="team">
                        <Row>
                            <Col md="4">
                            <div className="team-player">
                            <img className="icon" src={`images/lightbulb.png`}/>
                                <h4 className="title">Romina Hadid</h4>
                                <p className="category text-info">Model</p>
                                <p className="description">
                                You can write here details about one of your team members.
                                You can give more details about what they do. Feel free to
                                add some{" "}
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    links
                                </a>{" "}
                                for people to be able to follow them outside the site.
                                </p>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="team-player">
                                <img className="icon" src={`images/lightbulb.png`}/>
                                <h4 className="title">Ryan Tompson</h4>
                                <p className="category text-info">Designer</p>
                                <p className="description">
                                You can write here details about one of your team members.
                                You can give more details about what they do. Feel free to
                                add some{" "}
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    links
                                </a>{" "}
                                for people to be able to follow them outside the site.
                                </p>
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="team-player">
                            <img className="icon" src={`images/lightbulb.png`}/>
                                <h4 className="title">Eva Jenner</h4>
                                <p className="category text-info">Fashion</p>
                                <p className="description">
                                You can write here details about one of your team members.
                                You can give more details about what they do. Feel free to
                                add some{" "}
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    links
                                </a>{" "}
                                for people to be able to follow them outside the site.
                                </p>
                            </div>
                            </Col>
                        </Row>
                        </div>
                    </Container>
                </div>
                <div className='posts'>
                    <PostForm onPost={this.handleCreatePost} />
                    <PostList posts={posts} onVote={this.handleCreateVote} listMorePosts={this.listMorePosts} hasMore={this.state.hasMore} />{
                        postLoading &&
                        <Alert color='warning' className='loading'>Loading...</Alert>
                    }
                </div>
            </div>
        );
    }

    getWeather(city, unit) {
        this.setState({
            weatherLoading: true,
            masking: true,
            city: city // set city state immediately to prevent input text (in WeatherForm) from blinking;
        }, () => { // called back after setState completes
            getWeather(city, unit).then(weather => {
                this.setState({
                    ...weather,
                    weatherLoading: false
                }, () => this.notifyUnitChange(unit));
            }).catch(err => {
                console.error('Error getting weather', err);

                this.setState({
                    ...Today.getInitWeatherState(unit),
                    weatherLoading: false
                }, () => this.notifyUnitChange(unit));
            });
        });

        setTimeout(() => {
            this.setState({
                masking: false
            });
        }, 600);
    }

    listPosts(searchText) {
        this.setState({
            postLoading: true
        }, () => {
            listPosts(searchText).then(posts => {
                this.setState({
                    posts,
                    postLoading: false
                });
            }).catch(err => {
                console.error('Error listing posts', err);

                this.setState({
                    posts: [],
                    postLoading: false
                });
            });
        });
    }

    handleWeatherQuery(city, unit) {
        this.getWeather(city, unit);
    }

    notifyUnitChange(unit) {
        if (this.props.units !== unit) {
            this.props.onUnitChange(unit);
        }
    }

    handleCreatePost(mood, text) {
        createPost(mood, text).then(() => {
            this.listPosts(this.props.searchText);
        }).catch(err => {
            console.error('Error creating posts', err);
        });
    }

    handleCreateVote(id, mood) {
        createVote(id, mood).then(() => {
            this.listPosts(this.props.searchText);
        }).catch(err => {
            console.error('Error creating vote', err);
        });
    }

    listMorePosts() {
        if(this.state.posts.length < 1){
            return
        }
        this.setState({
            postLoading: true
        });
        listPosts(this.props.searchText, this.state.posts[this.state.posts.length - 1].id).then(posts => {
            this.setState({
                ...this.state,
                posts: [...this.state.posts, ...posts],
                hasMore: posts.length > 0
            });
        }).catch(err => {
            console.error('Error listing more posts', err);
        }).then(() => this.setState({
            postLoading: false
        }));
    };
}
