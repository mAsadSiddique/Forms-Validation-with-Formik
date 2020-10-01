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
        }
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
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
