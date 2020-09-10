import React, { Component } from "react";

class Calculator extends Component {

    showOrders(orders) {
        if (!orders || orders.length === 0) {
            return <li className="text-right text-muted title">No Product</li>
        } else {
            return orders.map(order => {
                return (
                    <li className="text-right text-success title" key={order.product.id}>
                        {order.product.ProductName} X {order.quantity} = {order.product.ProductPrice * order.quantity} THB
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onRemoveOrder(order.product)}>X</button>
                    </li>
                )
            })
        }
    };

    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div>
                <h1 className="text-right">{totalPrice} THB</h1>
                <hr />
                <ul className="list-unstyled ">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>Confirm</button>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>Cancel</button>
            </div>
        );
    }
}

export default Calculator;