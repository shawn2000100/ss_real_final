import React from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Input,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form, 
    FormGroup,
    Modal, ModalHeader, ModalBody, ModalFooter
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
            inputValue: props.city,
            inputLocationValue: props.city, // add
            inputDanger: false,
            moodToggle: false,
            mood: 'na',
            modalToggle: false // add
        };
        this.inputEl = null;
        this.moodToggleEl = null;
        this.handleInputTitleChange = this.handleInputTitleChange.bind(this); //add
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputLocationChange = this.handleInputLocationChange.bind(this); //add
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.handleMoodToggle = this.handleMoodToggle.bind(this);
        this.handleModalToggle = this.handleModalToggle.bind(this); // add
        this.handlePost = this.handlePost.bind(this);
    }

    render() {
        const {inputTitleValue, inputValue, inputLocationValue, moodToggle, mood, modalToggle} = this.state;
        const inputDanger = this.state.inputDanger ? 'is-invalid' : '';
        const {username} = this.props;
        console.log(username);
        return (
            <div className='post-form'>
                {/* <Alert color='info' className={`d-flex flex-column flex-sm-row justify-content-center`}>
                    <div className='mood align-self-start'>
                        <ButtonDropdown type='buttom' isOpen={moodToggle} toggle={this.handleMoodToggle}>
                            <DropdownToggle className='mood-toggle' type='button' caret color="secondary">
                                <i className={getMoodIcon(mood)}></i>&nbsp;{
                                    mood === 'na' ? '瘣餃�閖�𧼮��' : (mood === 'Clear'? '���憌�': (mood === 'Clouds'? '��见��': (mood === 'Drizzle' ? '霈��㮾' : '�𤓖�焵')))
                                }
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clear')}><i className={"fa fa-coffee"}></i>&nbsp;&nbsp;���憌�</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clouds')}><i className={"fa fa-bicycle"}></i>&nbsp;&nbsp;��见��</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Drizzle')}><i className={"fa fa-list-alt"}></i>&nbsp;&nbsp;霈��㮾</DropdownItem>
                                <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Thunder')}><i className={"fa fa-gamepad"}></i>&nbsp;&nbsp;�𤓖�焵</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    <Input className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputTitleValue} onChange={this.handleInputTitleChange} placeholder="瘣餃�閙�䠷��...?"></Input>
                    <Input className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputValue} onChange={this.handleInputChange} placeholder="瘣餃�訫�批捆...?"></Input>
                    <Input className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputLocationValue} onChange={this.handleInputLocationChange} placeholder="瘣餃�訫𧑐暺�&������...?"></Input>
                    <Button className='btn-post align-self-end' color="info" onClick={this.handlePost}>Post</Button>
                </Alert> */}
<<<<<<< HEAD
                <Button color="danger" onClick={this.handleModalToggle}>�肟撱箸暑���</Button>
=======
                <Button color="danger" style={{fontWeight: 'bold'}} onClick={this.handleModalToggle}>Create Activity</Button>
>>>>>>> d1d18ceda8e54f247bc2ebc6c13ba952cd6cfcd4
                <Modal isOpen={modalToggle} toggle={this.handleModalToggle} className='modal-toggle'>
                    <ModalHeader toggle={this.handleModalToggle}>
                        Create Activity
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <div className='mood align-self-start'>
                                <ButtonDropdown type='buttom' isOpen={moodToggle} toggle={this.handleMoodToggle}>
                                    <DropdownToggle className='mood-toggle' type='button' caret color="secondary">
                                        <i className={getMoodIcon(mood)}></i>&nbsp;{
<<<<<<< HEAD
                                            mood === 'na' ? 'Cate' : (mood === 'Clear'? '���憌�': (mood === 'Clouds'? '��见��': (mood === 'Drizzle' ? '霈��㮾' : '�𤓖�焵')))
                                        }
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clear')}><i className={"fa fa-coffee"}></i>&nbsp;&nbsp;���憌�</DropdownItem>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clouds')}><i className={"fa fa-bicycle"}></i>&nbsp;&nbsp;��见��</DropdownItem>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Drizzle')}><i className={"fa fa-list-alt"}></i>&nbsp;&nbsp;霈��㮾</DropdownItem>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Thunder')}><i className={"fa fa-gamepad"}></i>&nbsp;&nbsp;�𤓖�焵</DropdownItem>
=======
                                            mood === 'na' ? 'Category' : (mood === 'Clear'? 'Eating': (mood === 'Clouds'? 'Sports': (mood === 'Drizzle' ? 'Studying' : 'Gaming')))
                                        }
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clear')}><i className={"fa fa-coffee"}></i>&nbsp;&nbsp;Eating</DropdownItem>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Clouds')}><i className={"fa fa-bicycle"}></i>&nbsp;&nbsp;Sports</DropdownItem>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Drizzle')}><i className={"fa fa-list-alt"}></i>&nbsp;&nbsp;Studying</DropdownItem>
                                        <DropdownItem type='button' onClick={() => this.handleDropdownSelect('Thunder')}><i className={"fa fa-gamepad"}></i>&nbsp;&nbsp;Gaming</DropdownItem>
>>>>>>> d1d18ceda8e54f247bc2ebc6c13ba952cd6cfcd4
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>

                            <FormGroup>
<<<<<<< HEAD
                                <Input valid className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputTitleValue} onChange={this.handleInputTitleChange} placeholder="瘣餃�閙�䠷��...?"></Input>
                            </FormGroup>
                            
                            <FormGroup>
                                <Input valid className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputValue} onChange={this.handleInputChange} placeholder="瘣餃�訫�批捆...?"></Input>
                            </FormGroup>

                            <FormGroup>
                                <Input valid className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputLocationValue} onChange={this.handleInputLocationChange} placeholder="瘣餃�訫𧑐暺�&������...?"></Input>
=======
                                <Input valid className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputTitleValue} onChange={this.handleInputTitleChange} placeholder="Event Title...?" style={{height: '2.5rem', marginTop: '0.5rem'}}></Input>
                            </FormGroup>
                            
                            <FormGroup>
                                <Input valid className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputValue} onChange={this.handleInputChange} placeholder="Event Context...?" style={{height: '12.5rem'}}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Input valid className={`input ${inputDanger}`} type='textarea' innerRef={el => {this.inputEl = el}} value={inputLocationValue} onChange={this.handleInputLocationChange} placeholder="Event Location&Time...?" style={{height: '2.5rem'}}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Button className='btn-post align-self-end' color="info" onClick={this.handlePost}>Submit</Button>
>>>>>>> d1d18ceda8e54f247bc2ebc6c13ba952cd6cfcd4
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
<<<<<<< HEAD
                        <Button className='btn-post align-self-end' color="info" onClick={this.handlePost}>���鈭�</Button>
                        <Button color="secondary" onClick={this.handleModalToggle}>��𡝗��</Button>
=======
                        NTHU Lang Exchange
>>>>>>> d1d18ceda8e54f247bc2ebc6c13ba952cd6cfcd4
                    </ModalFooter>
                </Modal>
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

    // add for input location
    handleInputLocationChange(e) {
        const text = e.target.value
        this.setState({inputLocationValue: text});
        if (text) {
            this.setState({inputDanger: false});
        }
    }

    handleMoodToggle(e) {
        this.setState((prevState, props) => ({
            moodToggle: !prevState.moodToggle
        }));
    }

    // add
    handleModalToggle(e){
        this.setState((prevState, props) => ({
            modalToggle: !prevState.modalToggle
        }));
    }

    handlePost() {
        if (this.state.mood === 'na') {
            this.setState({moodToggle: true});
            return;
        }
        if (!this.state.inputTitleValue) {
            this.setState({inputDanger: true});
            return;
        }
        if (!this.state.inputValue) {
            this.setState({inputDanger: true});
            return;
        }
        if (!this.state.inputLocationValue) {
            this.setState({inputDanger: true});
            return;
        }

        this.props.onPost(this.state.mood, this.state.inputValue, this.state.inputTitleValue, this.state.inputLocationValue);
        this.setState({
            inputLocationValue: '', // add
            inputTitleValue: '',    // add
            inputValue: '',
            mood: 'na'
        });
    }
}