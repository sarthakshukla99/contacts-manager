import React, { useState } from "react";
import { useInputVal } from "../hooks";

function ContactForm(props) {

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')


    const handleChange = (inputType, e) => {
        if (inputType === "name") {
          setName(e.target.value)
          return;
        }
        setEmail(e.target.value)
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email){
            props.addContact(name, email);
            setName('')
            setEmail('')
        }
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
                        value={name}
                        onChange={(e) => handleChange("name", e)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => handleChange("email", e)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={handleSubmit}
                >
                    Add Contact
                </button>
            </form>

        
        </div>
    );
}

const th = {
    textAlign: 'center'
}

export default ContactForm;
