import React, { useState } from "react";


function ContactTable(props) {
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleNameChange = (e) => {
        setEditName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEditEmail(e.target.value);
    };


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
                        placeholder="Name..."
                        required
                        // value={name}
                        onChange={handleNameChange}
                    />) : (props.name)}
            </td>
            <td className="text-center">
                {editMode ? (<input
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Email..."
                            required
                            // value={name}
                            onChange={handleEmailChange}
                        />) : props.email}
            </td>
            <td className="text-center">
                {editMode ? <button className="btn btn-warning mx-3" onClick={handleUpdateContact}>Save Changes</button> : <button className="btn btn-warning mx-3" onClick={handleEdit}>Update</button> }

                <button
                    className="btn btn-danger"
                    onClick={() => props.handleDelete(props.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ContactTable;
