import React, { Component } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faSun, faPlusSquare } from "@fortawesome/free-regular-svg-icons"
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { productsFetch, productsDelete } from "../../actions"

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null, show: false, setShow: false }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.loadProductItem = this.loadProductItem.bind(this);
    }

    componentDidMount() {
        this.props.productsFetch();
    }

    editProduct(product) {
        this.props.history.push('products/edit/' + product.id)
    }

    deleteProduct(product) {
        console.log("del||" + product.id);
        this.props.productsDelete(product.id);
    }

    loadProductItem() {
        //console.log("Here we go ");
        return this.props.products && this.props.products.map(product => {
            return (
                <tr className="text-center" key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.productId}</td>
                    <td>{product.ProductName}</td>
                    <td>{product.ProductPrice} THB</td>
                    <td><button className="btn btn-primary"><FontAwesomeIcon icon={faSun} onClick={() => { this.editProduct(product) }} /></button><button className="btn btn-danger ml-1" onClick={() => { this.deleteProduct(product) }}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                </tr>
            )
        }
        );
    }

    render() {
        return (
            <div >
                <Header />
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-sm-10">
                            <h1 className="text-center">Product List</h1>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-success mt-2" onClick={() => { this.props.history.push('products/add') }} ><FontAwesomeIcon icon={faPlusSquare} /></button>
                        </div>
                    </div>
                    <div className="row">
                        <Table striped bordered hover className="mx-3 mt-3">
                            <thead>
                                <tr className="text-center">
                                    <th>id</th>
                                    <th>productId</th>
                                    <th>ProductName</th>
                                    <th>ProductPrice</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.products && Array.isArray(this.props.products) && 
                                    this.loadProductItem()
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
                <Footer email="rawiphon_k@gmail.com" />
            </div>
        )
    }
}

function mapStatetoProps({ products }) {
    return { products }
}

export default withRouter(connect(mapStatetoProps, { productsFetch, productsDelete })(Product))