import React from 'react';
import { useFormik } from 'formik';

function Formik() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);

        },
        validate: (values) => {
            let error = {}
            if (!values.email)
                error.email = "Email is Required !"
            if (!values.password)
                error.password = "password is Required !"
            return error;
        }
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    {formik.errors.email ? <>{formik.errors.email}</> : ""}
                    <br />
                    User Name
                    <input
                        type="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </label>
                <br />
                <br />
                <label>
                    {formik.errors.password ? <>{formik.errors.password}</> : ""}
                    <br />
                    password
                    <input
                        type="password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}

                    />
                </label>
                <br />
                <br />
                <input type="submit" />
            </form>

        </div>
    )
}

export default Formik
