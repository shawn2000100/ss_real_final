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
    Fade
  } from "reactstrap";

import WeatherDisplay from 'components/WeatherDisplay.jsx';
import WeatherForm from 'components/WeatherForm.jsx';
import PostForm from 'components/PostForm.jsx';
import PostList from 'components/PostList.jsx';
import {getWeather, cancelWeather} from 'api/open-weather-map.js';
import {listPosts, createPost, createVote} from 'api/posts.js';
import './About.css';

export default class About extends React.Component {
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
            ...About.getInitWeatherState(),
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
    
            <div className="section section-team" style={{backgroundColor:'black'}}>
                 <div className='article'>
                 <h4 className="title666">You're Not Alone.</h4>
                <img className="icon" src={`images/alone.jpg`}/>
                <p className='words'>
                NTHU Language Exchange is an social networking service that helps people exchange their languages and make new friends locally. 
                It is a place to make real connections, people can exchange language skills or any idea in activities created on our website.
                </p>
                </div>
                
                <div className='article'>
                <h4 className="title666">NTHU Language Exchange is also a social networking tool for Making Friends.</h4>
                <img className="icon" src={`images/make-friend.jpg`}/>
                <p className='words'>
                Once upon a time, it was easy to make friends, but now there are so many challenges that we did not used to have, thwarting our efforts make genuine friendships with people.
                With more pressure to academic work and less time for leisure, there is less time to connect with our friends.
                </p>
                </div>
                <div className='article'><h4 className="title666">Exchange to New City</h4>
                <img className="icon" src={`images/exchange.jpg`}/>
                <p className='words'>
                When you exchange to a new city or neighbourhood, how are you supposed to make new friends in your new school? 
                At NTHU Language Exchange, our community is devoted to making it easier to find real friends, whether that is a friend you keep online or in person.
                We keep our features simple – log in, choose activity you like, and join them for exchange languages and make new friends.
                </p>
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
