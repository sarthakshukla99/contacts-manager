import React from "react";

function ContactTable(props) {
    
    return (
        <tr>
            <th className="text-center" scope="row">
                {props.number}
            </th>
            <td className="text-center">{props.name}</td>
            <td className="text-center">{props.email}</td>
            <td className="text-center">
                <button className="btn btn-warning mx-3">Edit</button>
                <button className="btn btn-danger" onClick={()=> props.handleDelete(props.id)} >Delete</button>
            </td>
        </tr>
    );
}

export default ContactTable;
