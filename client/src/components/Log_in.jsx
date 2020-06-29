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

import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {Auth} from "aws-amplify";

import './Log_in.css';

class Log_in extends React.Component {
    static propTypes = {
        unit: PropTypes.string,
        searchText: PropTypes.string,
        onUnitChange: PropTypes.func,
        // onNameChange: PropTypes.func
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
            //...Log_in.getInitWeatherState(),
            weatherLoading: false,
            masking: false,
            postLoading: false,
            posts: [],
            hasMore: true
        };

        // this.handleWeatherQuery = this.handleWeatherQuery.bind(this);
        // this.handleCreatePost = this.handleCreatePost.bind(this);
        // this.handleCreateVote = this.handleCreateVote.bind(this);
        // this.listMorePosts = this.listMorePosts.bind(this);
        this.getName = this.getName.bind(this);
    }

    // componentDidMount() {
    // }

    // componentWillUnmount() {
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.searchText !== this.props.searchText) {
    //         this.listPosts(nextProps.searchText);
    //     }
    // }

    render() {
        const {unit, onNameChange} = this.props;
        const {group, city, masking, posts, postLoading} = this.state;

        // document.body.className = `weather-bg ${group}`;
        // document.querySelector('.weather-bg .mask').className = `mask ${masking ? 'masking' : ''}`;
        //this.getName();
        // console.log("hello");
        return (
            <div className='log_in'>
            <img className="intro route bg-image" src={`images/landing_page_darker.jpg`}/>
                
            </div>
        );
    }
       getName(){
            // var real_name;
            // Auth.currentAuthenticatedUser().then(user =>{
            //     real_name = (typeof user.username==='undefined')? user.name: user.username;
            // });
            console.log(this.props.federated);
            console.log(typeof(this.props.screenProps))
       }
//     getWeather(city, unit) {
//         this.setState({
//             weatherLoading: true,
//             masking: true,
//             city: city // set city state immediately to prevent input text (in WeatherForm) from blinking;
//         }, () => { // called back after setState completes
//             getWeather(city, unit).then(weather => {
//                 this.setState({
//                     ...weather,
//                     weatherLoading: false
//                 }, () => this.notifyUnitChange(unit));
//             }).catch(err => {
//                 console.error('Error getting weather', err);

//                 this.setState({
//                     ...Log_in.getInitWeatherState(unit),
//                     weatherLoading: false
//                 }, () => this.notifyUnitChange(unit));
//             });
//         });

//         setTimeout(() => {
//             this.setState({
//                 masking: false
//             });
//         }, 600);
//     }

//     listPosts(searchText) {
//         this.setState({
//             postLoading: true
//         }, () => {
//             listPosts(searchText).then(posts => {
//                 this.setState({
//                     posts,
//                     postLoading: false
//                 });
//             }).catch(err => {
//                 console.error('Error listing posts', err);

//                 this.setState({
//                     posts: [],
//                     postLoading: false
//                 });
//             });
//         });
//     }

//     handleWeatherQuery(city, unit) {
//         this.getWeather(city, unit);
//     }

//     notifyUnitChange(unit) {
//         if (this.props.units !== unit) {
//             this.props.onUnitChange(unit);
//         }
//     }

//     handleCreatePost(mood, text) {
//         createPost(mood, text).then(() => {
//             this.listPosts(this.props.searchText);
//         }).catch(err => {
//             console.error('Error creating posts', err);
//         });
//     }

//     handleCreateVote(id, mood) {
//         createVote(id, mood).then(() => {
//             this.listPosts(this.props.searchText);
//         }).catch(err => {
//             console.error('Error creating vote', err);
//         });
//     }

//     listMorePosts() {
//         if(this.state.posts.length < 1){
//             return
//         }
//         this.setState({
//             postLoading: true
//         });
//         listPosts(this.props.searchText, this.state.posts[this.state.posts.length - 1].id).then(posts => {
//             this.setState({
//                 ...this.state,
//                 posts: [...this.state.posts, ...posts],
//                 hasMore: posts.length > 0
//             });
//         }).catch(err => {
//             console.error('Error listing more posts', err);
//         }).then(() => this.setState({
//             postLoading: false
//         }));
//     };
}


export default withAuthenticator(Log_in);
// export default Log_in;