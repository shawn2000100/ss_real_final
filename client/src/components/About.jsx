import React from 'react';
import PropTypes from 'prop-types';
import {
    Jumbotron,
    Container,
    Row,
    Col
} from "reactstrap";

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
                    <div className=" section-team text-center" style={{ backgroundColor: 'white' }}>
                        <Jumbotron>
                            <h3 className="title-topic">OUR GOALS</h3>
                            <div class="line-title"></div>
                            <div className="team">
                                <hr className="my-2" />
                                <Row>
                                    <Col md="4">
                                        <div className="team-player">
                                            <img className="bg-image circle" src={`images/alone.jpg`}/>
                                            <div calssName="up-padding">
                                                <h4 className="title">Relationship</h4>
                                            </div>
                                            
                                            <p className="category text-info">you are not alone</p>
                                            <p className="description">
                                                <a href="http://localhost:7070/" onClick={(e) => e.preventDefault()}>
                                                    NTHU Language Exchange
                                                </a>{" "}is an social networking service that helps people exchange their languages and make new friends locally.It is a place to make real connections, people can exchange language skills or any idea.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="team-player">
                                            <img className="bg-image circle" src={`images/make-friend.jpg`} />
                                            <h4 className="title">Making Friends</h4>
                                            <p className="category text-info">skills exchange</p>
                                            <p className="description">
                                                Once upon a time, it was easy to make friends, but now there are so many challenges that we did not used to have.With more pressure to academic work and less time for leisure, there is less time to connect with our friends.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="team-player">
                                            <img className="bg-image circle" src={`images/exchange.jpg`} />
                                            <h4 className="title">Exchange to New City</h4>
                                            <p className="category text-info">challenge</p>
                                            <p className="description">
                                                When you exchange to a new city or neighbourhood, how are you supposed to make new friends in your new school?At{" "}
                                                <a href="http://localhost:7070/" onClick={(e) => e.preventDefault()}>
                                                    NTHU Language Exchange
                                                </a>{" "}, our community is devoted to making it easier to find real friends.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            
                            <p className="lead">
                                <Container>
                                    <h3 className="title-topic">OUR TEAM</h3>
                                    <div class="line-title"></div>
                                    <hr className="my-2" />

                                    <div className="team">
                                        <Row>
                                            <Col md="3">
                                                <div className="team-player">
                                                    <img className="icon" src={`images/Jay.jpg`}style={{width:70,height:70,borderRadius:70}} imageStyle={{borderRadius:70}} />
                                                    <h4 className="title">Jay Chen</h4>
                                                    <p className="feature-content">資應所二年級</p>
                                                    <p className="feature-content">
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
                                                    <p className="feature-content">資應所二年級</p>
                                                    <p className="feature-content">
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
                                                    <p className="feature-content">資工系大二</p>
                                                    <p className="feature-content">
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
                                                    <p className="feature-content">資工系大二</p>
                                                    <p className="feature-content">
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

                        {/* <!-- Section Footer --> */}
                        <section className="paralax-mf footer-paralax bg-image sect-mt4">
                            <div className="overlay-mf"></div>
                            <footer>
                                <div className="row">
                                    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                                        <h1 className="footer-heading">Contact</h1>
                                        <ul className="list-unstyled">
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                                        <h1 className="footer-heading">Report issues</h1>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                                        <div className="footer-heading">Links</div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                                        <div className="footer-heading">Follow us</div>
                                    </div>
                                </div>
                            </footer>
                        </section>
                        {/* <!--/ End Section footer /--> */}
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
