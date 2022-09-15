import React, { useState } from "react";

function useInputVal(val){
    const [value , setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    return {
        value,
        onChange: handleChange
    }
}


function Contacts() {
    const name = useInputVal('');
    const phone = useInputVal('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const handleCreate = (e) => {
        console.log(name.value);
        console.log(phone.value);
    }
    return (
        <div>
            <form className="container my-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
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
                    <label htmlFor="exampleFormControlInput1" className="form-label">
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
                <button type="submit" className="btn btn-warning" onClick={handleCreate}>Add Contact</button>
                
            </form>
        </div>
    );
}

export default Contacts;
