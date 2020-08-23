import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
    
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