import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import FormField from "../../common/FormField"
import { productformField } from "./formField"
import { connect } from "react-redux"

class ProductForm extends Component {

    renderField(formField) {
        return formField.map(({ label, name, types, required }) => {
            return (
                <Field key={name} label={label} name={name} type={types} required={required} component={FormField} />
            )
        })
    }

    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderField(productformField)}
                    <button className="btn btn-block btn-info title" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    productformField.forEach(({ name, required }) => {
        if (!values[name] && required) {
            errors[name] = 'please input this field';
        }
    })
    return errors;
}

function mapStatetoProps({ products }) {
    if(products && products.id){
        return { initialValues : products}
    }else{
        return {};
    }
    
}

ProductForm = reduxForm({ validate, form: "productForm" })(ProductForm);

export default connect(mapStatetoProps)(ProductForm);