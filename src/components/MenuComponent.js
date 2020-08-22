import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component{

    constructor(props){
        super(props)
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish){
        console.log(dish);
        this.setState({
            selectedDish : dish
        })
        console.log(this.state.selectedDish);
    };
    
    
    //return correcponding view for this component
    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="row">
                    {menu}
                    <DishDetail selectedDish={this.state.selectedDish}></DishDetail>
            </div>
           
        );
        
    }
    //render end
}

export default Menu;