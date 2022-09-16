import React, { useState } from "react";

// saperate component for displaying the fetched data of users

function ContactTable(props) {
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editMode, setEditMode] = useState(false);

    // function for handling edit Mode 
    const handleEdit = () => {
        setEditMode(true);
    };

    // function for handling edit Mode which tells us if we are inside edit mode or not
    const handleNameChange = (e) => {
        setEditName(e.target.value);
    };

    // function for handling change in email input 
    const handleEmailChange = (e) => {
        setEditEmail(e.target.value);
    };


    // function for UPDATE contact
    const handleUpdateContact = async () => {
        const { handleUpdate, id } = props;
        if (editName && editEmail ) {
          await handleUpdate(editName, editEmail, id);
          setEditMode(false)
        }
      };

    return (
        <tr>
            <th className="text-center" scope="row">
                {props.number}
            </th>
            <td className="text-center">
                {editMode ? (<input
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder={props.name}
                        required
                        onChange={handleNameChange}
                    />) : (props.name)}
            </td>
            <td className="text-center">
                {editMode ? (<input
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder={props.email}
                            required
                            onChange={handleEmailChange}
                        />) : props.email}
            </td>
            <td className="text-center">
                {editMode ? <button className="btn btn-warning mx-3" onClick={handleUpdateContact}>Save Changes</button> : <button className="btn btn-warning mx-3 my-1" onClick={handleEdit}>Update</button> }

                <button
                    className="btn btn-danger my-1"
                    onClick={() => props.handleDelete(props.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ContactTable;
