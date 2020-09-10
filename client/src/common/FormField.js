import React from "react"

export default ({ input, type, label, required, meta:{error,touched} }) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input type={type} required={required} {...input} className="form-control" />
            {error && touched && (
                <div className="text-danger title mt-2">{error}</div>
            )}
        </div>
    )
}