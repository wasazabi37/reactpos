import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../Products/ProductList"
import axios from "axios";

class monitor extends Component {

    constructor(props) {
        super(props);
        this.state = { totalPrice: 0, orders: [], confirm: false, msg: '' ,objClassName:''};
        this.addOrder = this.addOrder.bind(this);
        this.removeOrder = this.removeOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id === product.id);
        if (findOrder) {
            findOrder.quantity++;
            //console.log("+addOrder||"+findOrder);
        } else {
            this.state.orders.push({ product: product, quantity: 1 });
            //console.log("addOrder||"+findOrder);
        }
        const totalPrice = this.state.totalPrice + parseInt(product.ProductPrice);
        this.setState({ totalPrice: totalPrice, orders: this.state.orders });
    }

    removeOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id === product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id !== product.id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.ProductPrice));
        this.setState({ totalPrice: totalPrice, orders: resultOrder });
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id === product.id);
        let resultOrder = this.state.orders.filter(order => order.product.id !== product.id);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({ totalPrice: totalPrice, orders: resultOrder, confirm: false });
    }

    confirmOrder() {
        const { totalPrice, orders } = this.state;
        if (orders && orders.length > 0) {
            axios.post("http://localhost:3001/orders", { orderedDate: new Date(), totalPrice, orders })
                .then(res => {
                    this.setState({ totalPrice: 0, orders: [], confirm: true, msg:'Success',objClassName:'alert alert-success title text-right' })
                    this.hideMessage();
                    //console.log("SCRRTT");
                });
        } else {
            this.setState({ totalPrice: 0, orders: [], confirm: true, msg:'Select Product First',objClassName:'alert alert-warning title text-right' })
            this.hideMessage();
        }   
    }

    cancelOrder() {
        this.setState({ totalPrice: 0, orders: [], confirm: false, msg:"" });  
    }

    hideMessage(){
        setTimeout(() => this.setState({confirm: false, msg:""}),5000);
    }

    render() {
        //console.log("monitor||"+this.props.products);
        return (
            <div className="container-fluid mt-3">
                {this.state.confirm &&
                    <div className={this.state.objClassName}>
                        {this.state.msg}
                    </div>
                }
                {/* <Sidebar /> */}
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onRemoveOrder={this.removeOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default monitor;

