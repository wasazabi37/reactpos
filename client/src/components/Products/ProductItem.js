import React, { Component } from "react";
import { Card } from "react-bootstrap"
// functional component
// const ProductItem = (props) => { 
//     const { ProductName, ProductPrice } = props;
//     return (
//         <div>
//             <p>{ProductName}</p>
//             <p>{ProductPrice}</p>
//         </div>
//     )
// }

class ProductItem extends Component {

    constructor(props) {
        super(props);
        //console.log("constructor||"+props.product.ProductName);
    }


    render() {
        const { ProductName, ProductPrice, thumbnail } = this.props.product;
        //console.log("item||"+this.props.product.ProductName);
        return (
            // <div className="col-md-3 col-sm-6 mt-1">
            //     <img className="img-fluid img-thumbnail" src={thumbnail} alt=""/>
            //     <h5 className="mt-2 ">{thumbnail}</h5>
            //     <p className="text-right title">{ProductPrice}</p>
            //     {/* <button className="btn btn-block btn-secondary" onClick={(e) => {this.addTocart(ProductName)}}> */}
            //     <button className="btn btn-block btn-primary" onClick={() => this.props.onAddOrder(this.props.product)}>
            //         Buy
            //     </button>
            // </div>
            <div className="col-md-3 col-sm-6 mt-1">
                <Card onClick={() => this.props.onAddOrder(this.props.product)} border="light">
                    <Card.Img variant="top" src={thumbnail}/>
                    <Card.Body>
                        <Card.Title className="text-center text-secondary">{ProductName}</Card.Title>
                        <Card.Text className="text-center text-secondary">{ProductPrice} THB</Card.Text>
                        {/* <button className="btn btn-block btn-primary" onClick={() => this.props.onAddOrder(this.props.product)}>
                            Buy
                        </button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ProductItem;
