import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Input,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import {getMoodIcon} from 'utilities/weather.js';

import './PostForm.css';

export default class PostForm extends React.Component {
    static propTypes = {
        onPost: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            inputTitleValue: props.city, // add
            inputValue: null,
            inputDanger: false,
            moodToggle: false,
            mood: 'na'
        };
        this.inputEl = null;
        this.moodToggleEl = null;

        this.handleInputTitleChange = this.handleInputTitleChange.bind(this); //add
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.handleMoodToggle = this.handleMoodToggle.bind(this);

        this.handlePost = this.handlePost.bind(this);
    }

    render() {
        const {inputTitleValue, inputValue, moodToggle, mood} = this.state;
        // const inputTitleDanger = this.state.inputDanger ? 'is-invalid' : '';
        const inputDanger = this.state.inputDanger ? 'is-invalid' : '';
        
        return (
            <div className='post-form'>
                <Alert color='info' className={`d-flex flex-column flex-sm-row justify-content-center`}>
                    <div className='mood align-self-start'>
                        <ButtonDropdown type='buttom' isOpen={moodToggle} toggle={this.handleMoodToggle}>
                            <DropdownToggle className='mood-toggle' type='button' caret color="secondary">
                                <i className={getMoodIcon(mood)}></i>&nbsp;{
                                    mood === 'na' ? '活動類型' : mood
                                }
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clear')}><i className={"fa fa-university"}></i>&nbsp;&nbsp;約跑步</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clouds')}><i className={"fa fa-wechat"}></i>&nbsp;&nbsp;揪吃飯</DropdownItem>
                                {/* <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Drizzle')}><i className={getMoodIcon('Drizzle')}></i>&nbsp;&nbsp;Drizzle</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Rain')}><i className={getMoodIcon('Rain')}></i>&nbsp;&nbsp;Rain</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Thunder')}><i className={getMoodIcon('Thunder')}></i>&nbsp;&nbsp;Thunder</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Snow')}><i className={getMoodIcon('Snow')}></i>&nbsp;&nbsp;Snow</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Windy')}><i className={getMoodIcon('Windy')}></i>&nbsp;&nbsp;Windy</DropdownItem> */}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    {/* <Row> */}
                        {/* <Col> */}
                            <Input className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputTitleValue} onChange={this.handleInputTitleChange} placeholder="活動標題...?"></Input>
                        {/* </Col> */}
                        {/* <Col> */}
                            <Input className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputValue} onChange={this.handleInputChange} placeholder="活動內容...?"></Input>
                        {/* </Col> */}
                    {/* </Row> */}
                    <Button className='btn-post align-self-end' color="info" onClick={this.handlePost}>Post</Button>
                </Alert>
            </div>
        );
    }

    handleDropdownSelect(mood) {
        this.setState({mood: mood});
    }

    handleInputChange(e) {
        const text = e.target.value
        this.setState({inputValue: text});
        if (text) {
            this.setState({inputDanger: false});
        }
    }

    // add for input title
    handleInputTitleChange(e) {
        const text = e.target.value
        this.setState({inputTitleValue: text});
        if (text) {
            this.setState({inputDanger: false});
        }
    }

    handleMoodToggle(e) {
        this.setState((prevState, props) => ({
            moodToggle: !prevState.moodToggle
        }));
    }

    handlePost() {
        if (this.state.mood === 'na') {
            this.setState({moodToggle: true});
            return;
        }
        if (!this.state.inputValue) {
            this.setState({inputDanger: true});
            return;
        }
        if (!this.state.inputTitleValue) {
            this.setState({inputDanger: true});
            return;
        }

        this.props.onPost(this.state.mood, this.state.inputValue, this.state.inputTitleValue);
        this.setState({
            inputTitleValue: '', // add
            inputValue: '',
            mood: 'na'
        });
    }
}
