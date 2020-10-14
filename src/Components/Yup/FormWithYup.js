import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Formik() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);

        },
        validationSchema: yup.object({
            email: yup.string().email().required('This field is required *'),
            password: yup.string().min(6, 'Password is too short')
                .max(20, 'Password is too long')
                .required('This field is required *')


        })

    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    {formik.errors.email ? <div className="error-message">{formik.errors.email}</div> : ""}
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
                    {formik.errors.password ? <div className="error-message">{formik.errors.password}</div> : ""}
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
