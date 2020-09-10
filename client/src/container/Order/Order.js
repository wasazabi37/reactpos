import React, { Component } from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { connect } from "react-redux"
import { ordersFetch, ordersDelete } from "../../actions"

class Order extends Component {

    constructor(props) {
        super(props);
        this.delOrder = this.delOrder.bind(this);
    }

    componentDidMount() {
        this.props.ordersFetch();
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide });
    }


    delOrder(order) {
        console.log("Order ID||" + order.id);
        this.props.ordersDelete(order.id);
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div className="col-md-3" key={order.id}>
                    <hr />
                    <p className="text-right">
                        <button onClick={() => this.delOrder(order)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </p>
                    <h5>Date : {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (
                                <li key={record.product.id}>
                                    {record.product.ProductName} X {record.quantity} = {record.product.ProductPrice * record.quantity} THB
                                </li>
                            )
                        })}
                    </ul>
                    <p className="title">Total {order.totalPrice} THB</p>
                </div>
            )
        }
        )
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid mt-3 ml-3 mr-3">
                    <h1 className="text-center text-muted">Order List</h1>
                    <div className="row m-3">                   
                            {this.showOrders()}
                    </div>
                </div>
                <Footer email="rawiphon_k@gmail.com" />
            </div>
        )
    }
}

function mapStatetoProps({ orders }) {
    return { orders }
}

export default connect(mapStatetoProps, { ordersFetch, ordersDelete })(Order);