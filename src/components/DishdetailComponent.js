import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDishes(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }
  renderComments(dish) {
    if (dish != null)
      return (
        <div className="text-left card-deck ml-1 h-[540px]">
          <h3 className="mb-3">Comments</h3>
          <div>
            {dish.comments.map((item) => {
              var date = new Date(item.date);
              return (
                <div key={item.id} className="mb-3 font-weight-bold">
                  <CardText>{item.comment}</CardText>
                  <span>
                    --{item.author}, {date.toDateString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      );
    else return <div></div>;
  }
  render() {
   if(this.props.dish != null){
    return (
      <div className="container">
       <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDishes(this.state.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
   }else{
    return (<div></div>);
   }
  }
}
export default DishDetail;