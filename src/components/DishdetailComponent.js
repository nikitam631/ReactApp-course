import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
    
    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        else
            return(
                <div></div>
            );
    };
    function RenderComments({dish}) {
        
        if (dish != null)
        
            return(
                <div>
                    <h3>Comments</h3>
                    <ul>
                        {dish.comments.map(comment =>  
                            <li key={comment.id}>
                                {comment.comment}
                                <br></br>
                                --{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </li>
                        )}
                    </ul>
                </div>
            )
        else
            return(
                <div></div>
            );
    };
    //return corresponding view for this component
    const DishDetail = (props)=>{
        return(
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}></RenderDish>
                  </div>
                  <div className="col-12 col-md-6 m-1">
                    <RenderComments dish={props.dish}></RenderComments>
                  </div>
                </div>
            </div>
        )
    }
    
export default DishDetail;