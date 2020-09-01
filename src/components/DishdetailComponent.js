import React, { Component } from 'react';
import { Row, Col, Label, Card, CardImg, CardText, CardBody, CardTitle, Button, ModalHeader, ModalBody, Modal} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderDish({dish}) {
        console.log(dish);
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish[0].image} alt={dish[0].name} />
                    <CardBody>
                      <CardTitle>{dish[0].name}</CardTitle>
                      <CardText>{dish[0].description}</CardText>
                    </CardBody>
                </Card>
                
            );
        else
            return(
                <div></div>
            );
    };
    function RenderComments({comments}) {
        
        if (comments != null)
        
            return(
                <div>
                    <h3>Comments</h3>
                    <ul>
                        {comments.map(comment =>  
                            <li key={comment.id}>
                                {comment.comment}
                                <br></br>
                                --{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </li>
                        )}
                    </ul>
                    <br></br>
                    <CommentForm></CommentForm>
                </div>
            )
        else
            return(
                <div></div>
            );
    };

    class CommentForm extends Component{
        constructor(props){
            super(props);

            this.state = {
                isModalOpen:false
            };

            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    

        toggleModal(){
            this.setState({
                isModalOpen:!this.state.isModalOpen
            })
        };

        handleSubmit(values){
            alert(JSON.stringify(values));
        }

        //render view for comment form
        render(){
            return(
                <div>
                    <Button onClick={this.toggleModal}>Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader>CommentForm</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleSubmit}>
                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" id="rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Label htmlFor="yourname">Your Name</Label>
                                    
                                        <Control.text model=".yourname" id="yourname" name="yourname"
                                            placeholder="Your Name" className="form-control" 
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}/>
                                        <Errors
                                            className="text-danger"
                                            model=".yourname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Label htmlFor="commentmessage">Comment</Label>
                                        <Control.textarea model=".commentmessage" id="commentmessage" name="commentmessage"
                                            rows="12" className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10}}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            )
        }
    }

    //return corresponding view for this component
    const DishDetail = (props)=>{
        return(
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">{props.dish.name}
                    <RenderDish dish={props.dish}></RenderDish>
                  </div>
                  <div className="col-12 col-md-6 m-1">
                    <RenderComments comments={props.comments}></RenderComments>
                  </div>
                </div>
            </div>
        )
    }
    
export default DishDetail;