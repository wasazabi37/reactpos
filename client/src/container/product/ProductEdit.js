import React, { Component } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ProductForm from "../../components/Products/ProductForm"
import { connect } from "react-redux"
import { productCreate, productUpdate, productFetchOne } from "../../actions"

class ProductEdit extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetchOne(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, match, data, productCreate, productUpdate } = this.props;
        console.log("PE||" + formValues);
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>Add Product</h2>
                            {data.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {data.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>Edit Product</h2>
                            {data.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {data.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productUpdate(data.id, formValues)} />
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStatetoProps(form, products) {
    return { formValues: form.productForm ? form.productForm.values : null, data:products };
}

export default connect(mapStatetoProps, { productCreate, productUpdate, productFetchOne })(ProductEdit);