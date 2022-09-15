import React from "react";
import { useInputVal } from "../hooks";

function ContactForm() {
    const name = useInputVal("");
    const phone = useInputVal("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleCreate = (e) => {
        console.log(name.value);
        console.log(phone.value);
    };
    return (
        <div className="container">
            <form className="container my-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter name"
                        {...name}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter Phone"
                        {...phone}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={handleCreate}
                >
                    Add Contact
                </button>
            </form>

            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th className="text-center" scope="col">#</th>
                        <th className="text-center" scope="col">Name</th>
                        <th className="text-center" scope="col">Phone</th>
                        <th className="text-center" scope="col" colSpan={2}>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-center" scope="row">1</th>
                        <td className="text-center">Sarthak</td>
                        <td className="text-center">83838383</td>
                        <td className="text-center" >
                            <button className="btn btn-warning mx-3">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const th = {
    textAlign: 'center'
}

export default ContactForm;
