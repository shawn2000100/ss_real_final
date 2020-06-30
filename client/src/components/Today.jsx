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
import { getWeather, cancelWeather } from 'api/open-weather-map.js';
import { listPosts, createPost, createVote } from 'api/posts.js';
import {Link} from 'react-router-dom';
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
        const { unit } = this.props;
        const { group, city, masking, posts, postLoading } = this.state;

        // document.body.className = `weather-bg ${group}`;
        // document.querySelector('.weather-bg .mask').className = `mask ${masking ? 'masking' : ''}`;

        return (
            <div className='today'>
                <div className="content-center">
                    <Container className="landing_title">

                        <div className="title-brand">
                            <h1 className="presentation-title">NTHU Language Exchange</h1>
                        </div>
                        <h2 className="presentation-subtitle text-center">
                            'Be fluent – be global. Be a global citizen'</h2>
                    </Container>
                </div>
                <div className="section section-team text-center" style={{ backgroundColor: 'white' }}>
                    {/* <img className="bg-image" src={`images/landing_page_darker.jpg`}/> */}

                    <Container>
                        <div className="team">
                            <h2 className="title">Coming soon</h2>
                            <Row>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="bg-image" src={`images/culture_sharing.jpg`} />
                                        <h4 className="title">culture_sharing</h4>
                                        <p className="category text-info">2020/7/5(Sun)</p>
                                        <p className="description">
                                            Have you ever thought about sharing your culture with others? You might be living in your native country or never traveled far from home. Or perhaps you are traveling, studying, working or living in another country. Whatever the case may be, there are plenty of opportunities for you to share a little bit with others.
                                </p>
                                        <p className="lead">
                                        <Button color="primary" size="sm" tag={Link} to='/about'>Learn More</Button>
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="bg-image" src={`images/board_game.jpg`} />
                                        <h4 className="title">board game</h4>
                                        <p className="category text-info">2020/7/11(Mon)</p>
                                        <p className="description">
                                            Just because we're locked down doesn't mean we have to stop having fun. You're invited to join us for a night of gaming.We sign on via Zoom and laugh, banter and chat whilst playing games - both ones you'll recognise and some new games you'll fall in love with. Through these hard times it's great to connect with friends and the sound of laughter is the medicine we all need.
                                </p>
                                        <p className="lead">
                                        <Button color="primary" size="sm" tag={Link} to='/about'>Learn More</Button>
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="bg-image" src={`images/welcome_party.jpg`} />
                                        <h4 className="title">party party all night</h4>
                                        <p className="category text-info">2020/7/17(Fri)~2020/7/18(Sat)</p>
                                        <p className="description">
                                            let's go party party all night oh oh oh !!!!!!!!!!!!!!!
                                </p>
                                        <p className="lead">
                                        
                                        </p>
                                        <Button color="primary" size="sm" tag={Link} to='/about'>Learn More</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <h2 className="title">WHAT YOU CAN EXPECT</h2>
                    <Container>
                        <div className="team">
                            <Row>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="icon" src={`images/friendship-icon.jpg`} />
                                        <h4 className="title">Friendship</h4>
                                        <p className="description">

                                        </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="icon" src={`images/language.jpg`} />
                                        <h4 className="title">Language skills</h4>

                                        <p className="description">                        </p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="team-player">
                                        <img className="icon" src={`images/entertainment-icon.png`} />
                                        <h4 className="title">Entertainment</h4>
                                        <p className="description">
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className='posts'>
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
