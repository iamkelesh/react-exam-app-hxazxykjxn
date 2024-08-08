import { useState } from "react";

export const useForm = (submitHandler, initialValues) => {
    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        submitHandler(values)
    }

    return ({
        values,
        changeHandler,
        submitHandler
    })
}