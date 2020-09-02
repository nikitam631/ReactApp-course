import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from '../components/LoadingComponent';

function RenderCard({item, isLoading, errMess}){
    if(isLoading){
        return(
            <Loading></Loading>
        )
    }
    else if(errMess){
        return (
            <h4>{errMess}</h4>
        )
    }
    else{
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
}

function Home(props){
    return(
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-3 m-1">
                <RenderCard item={props.dish}
                    isLoading={props.isLoading}
                    errMess={props.errMess}></RenderCard>
            </div>
            <div className="col-12 col-md-3 m-1">
                <RenderCard item={props.promotion}></RenderCard>
            </div>
            <div className="col-12 col-md-3 m-1">
                <RenderCard item={props.leader}></RenderCard>
            </div>
            </div>
        </div>
    );
}

export default Home;