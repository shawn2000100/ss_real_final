import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Jumbotron,
    Container,
    Row,
    Col,
    Alert,
    Fade
} from "reactstrap";

import WeatherDisplay from 'components/WeatherDisplay.jsx';
import WeatherForm from 'components/WeatherForm.jsx';
import PostForm from 'components/PostForm.jsx';
import PostList from 'components/PostList.jsx';
import { getWeather, cancelWeather } from 'api/open-weather-map.js';
import { listPosts, createPost, createVote } from 'api/posts.js';
import './About.css';

export default class About extends React.Component {
    static propTypes = {
        unit: PropTypes.string,
        searchText: PropTypes.string,
        onUnitChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            // ...About.getInitWeatherState(),
            weatherLoading: false,
            masking: false,
            postLoading: false,
            posts: [],
            hasMore: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchText !== this.props.searchText) {
            this.listPosts(nextProps.searchText);
        }
    }

    render() {
        const { unit } = this.props;
        const { group, city, masking, posts, postLoading } = this.state;
      
        return (
            <div className='about'>
                <div>
                <div className="section section-team text-center" style={{ backgroundColor: 'white' }}>
                    <Jumbotron>
                        <h1 className="display-3">About Us!</h1>
                        <div className="team">
                            <h2 className="title">OUR GOALS</h2>
                            <hr className="my-2" />
                            <Row>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="bg-image" src={`images/alone.jpg`}/>
                                        <h4 className="title">You're Not Alone</h4>
                                        <p className="category text-info">relationship</p>
                                        <p className="description">
                                            <a href="http://localhost:7070/" onClick={(e) => e.preventDefault()}>
                                                NTHU Language Exchange
                                </a>{" "}is an social networking service that helps people exchange their languages and make new friends locally.It is a place to make real connections, people can exchange language skills or any idea in activities created on our website.
                                </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="bg-image" src={`images/make-friend.jpg`} />
                                        <h4 className="title">Making Friends</h4>
                                        <p className="category text-info">skills exchange</p>
                                        <p className="description">
                                            Once upon a time, it was easy to make friends, but now there are so many challenges that we did not used to have, thwarting our efforts make genuine friendships with people.With more pressure to academic work and less time for leisure, there is less time to connect with our friends.
                                </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="bg-image" src={`images/exchange.jpg`} />
                                        <h4 className="title">Exchange to New City</h4>
                                        <p className="category text-info">challenge</p>
                                        <p className="description">
                                            When you exchange to a new city or neighbourhood, how are you supposed to make new friends in your new school?At{" "}
                                            <a href="http://localhost:7070/" onClick={(e) => e.preventDefault()}>
                                                NTHU Language Exchange
                                </a>{" "}, our community is devoted to making it easier to find real friends.We keep our features simple – log in, choose activity you like, and join them for exchange languages and make new friends.
                                </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <hr className="my-2" />

                        <p className="lead">
                            <Container>
                                <h2 className="title">WHO ARE WE?</h2>
                                <hr className="my-2" />

                                <div className="team">
                                    <Row>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img className="icon" src={`images/Jay.jpg`}style={{width:70,height:70,borderRadius:70}} imageStyle={{borderRadius:70}} />
                                                <h4 className="title">Jay Chen</h4>
                                                <p className="category text-info">資應所二年級</p>
                                                <p className="description">
                                                    Email:{" "}
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        shawn2000100@gmail.com
                                            </a>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img className="icon" src={`images/Roy.jpg`} style={{width:70,height:70,borderRadius:70}} imageStyle={{borderRadius:70}}/>
                                                <h4 className="title">Roy Luo</h4>
                                                <p className="category text-info">資應所二年級</p>
                                                <p className="description">
                                                    Email:{" "}
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        sai28055707@yahoo.com.tw
                                             </a>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img className="icon" src={`images/Bobby.jpg`} style={{width:70,height:70,borderRadius:70}} imageStyle={{borderRadius:70}}/>
                                                <h4 className="title">Bobby Lee</h4>
                                                <p className="category text-info">資工系大二</p>
                                                <p className="description">
                                                    Email:{" "}
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        karta15025452@gmail.com
                                            </a>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img className="icon" src={`images/Borhan.jpg`} style={{width:70,height:70,borderRadius:70}} imageStyle={{borderRadius:70}} />
                                                <h4 className="title">Borhan Lee</h4>
                                                <p className="category text-info">資工系大二</p>
                                                <p className="description">
                                                    Email:{" "}
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        BorhanLee10@gmail.com
                                            </a>
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </p>
                    </Jumbotron>
                </div>
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
                    ...About.getInitWeatherState(unit),
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
        if (this.state.posts.length < 1) {
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
