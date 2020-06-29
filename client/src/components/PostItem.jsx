import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    Tooltip,
    Collapse, Button
} from 'reactstrap';
import moment from 'moment';

import {getMoodIcon} from 'utilities/weather.js';

import './PostItem.css';

export default class PostItem extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        mood: PropTypes.string,
        title: PropTypes.string, // add
        text: PropTypes.string,
        location: PropTypes.string, // add
        username: PropTypes.string, // add
        clearVotes: PropTypes.number,
        cloudsVotes: PropTypes.number,
        drizzleVotes: PropTypes.number,
        rainVotes: PropTypes.number,
        thunderVotes: PropTypes.number,
        snowVotes: PropTypes.number,
        windyVotes: PropTypes.number,
        onVote: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            tooltipOpen: false,
            articleOpen: false // add
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleTooltipToggle = this.handleTooltipToggle.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.handleArticleToggle = this.handleArticleToggle.bind(this); // add
    }

    render() {
        const {id, mood, text, title, location, username, ts, clearVotes, cloudsVotes} = this.props;
        const {tooltipOpen, articleOpen} = this.state;

        return (
            <div className='post-item d-flex flex-column' >
                <Button color="primary" onClick={this.handleArticleToggle} style={{marginBottom: '0rem'}}>{username} | {title} | [{moment(ts * 1000).calendar()}]</Button>
                <Collapse isOpen={articleOpen}>
                    <div className='post d-flex'>
                        <div className='mood'>
                            <i className={getMoodIcon(mood)}></i>
                        </div>
                        <div className='wrap'>
                            {/* <div className='title'>{title}</div> */}
                            <div className='text'>{text}</div>
                            <div className='location'>{location}</div>
                            <div className='ts'>{moment(ts * 1000).calendar()}</div>
                        </div>
                    </div>

                    <div className='vote d-flex justify-content-end' onClick={this.handleClick}>
                        <div className='vote-results'>
                            {clearVotes > 0 && (<span><i className={"fa fa-thumbs-up"}></i>&nbsp;{clearVotes}&nbsp;&nbsp;</span>)}
                            {cloudsVotes > 0 && <span><i className={"fa fa-thumbs-down"}></i>&nbsp;{cloudsVotes}&nbsp;&nbsp;</span>}
                        </div>
                        <div className='vote-plus'>
                            <i id={`post-item-vote-${id}`} className='fa fa-tasks'></i>
                        </div>
                    </div>
                    
                    <Tooltip placement='left' isOpen={tooltipOpen} autohide={false} target={`post-item-vote-${id}`} toggle={this.handleTooltipToggle}>
                        <i className={`vote-tooltip fa fa-thumbs-up`} onClick={() => this.handleVote('Clear')}></i>&nbsp;
                        <i className={`vote-tooltip fa fa-thumbs-down`} onClick={() => this.handleVote('Clouds')}></i>&nbsp;
                    </Tooltip>
                </Collapse>
            </div>
        );
    }

    handleClick() {
        this.setState({
          tooltipOpen: true
        });
    }

    // add
    handleArticleToggle() {
        this.setState((prevState, props) => ({
            articleOpen: !prevState.articleOpen
        }));
    }

    handleTooltipToggle() {
        this.setState((prevState, props) => ({
            tooltipOpen: !prevState.tooltipOpen
        }));
    }

    handleVote(vote) {
        this.props.onVote(this.props.id, vote);
        this.setState({
          tooltipOpen: false
        });
    }
}
