import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {

    showProduct() {
            return this.props.products && 
            this.props.products.map(product => (
                <ProductItem key={product.id} product={product} onAddOrder={this.props.onAddOrder}/>
            ));
        
    }

    // showProducts() {
    //     return (
    //       this.props.products &&
    //       this.props.products.map(product => (
    //         <ProductItem key={product.productId} product={product} onAddOrder={this.props.onAddOrder} />
    //       ))
    //     );
    //   }

    render() {
        return (
            <div className="row">
                {this.showProduct()}
            </div>
        );
    }
}

export default ProductList;