import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishDetail extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.dish != null) {
      const comment = this.props.dish.comments.map((item) => {
        return (
          <div>
            <p>{item.comment}</p>
            <p>
              {item.author} {item.date}
            </p>
          </div>
        );
      });
      const dish = this.props.dish;
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-sm-7">
              <h2>comments</h2>
              {comment}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
//     const menu = this.props.dishes.map((dish) => {
//       return (
//         <div className="col-12 col-md-5 m-1">
//           <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardImgOverlay>
//               <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });
//     return (
//       <div className="container">
//         <div className="row">{menu}</div>
//         <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             {this.renderDishes(this.state.selectedDish)}
//           </div>
//           <div className="col-12 col-md-5 m-1">
//             {this.renderComments(this.state.selectedDish)}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default DishDetail;
