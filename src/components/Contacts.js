import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

function Contacts() {
    const [users, setUsers] = useState([]);
    var url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setUsers(data);
    };

    useEffect(() => {
        // call the function
        fetchData();
        console.log(users);
    }, []);


    const handleAddContact = async (name, email) => {
        let id = Date.now();
        console.log('USER ID =>', id);

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })

        const data = await response.json()
        console.log('CONTACT ADDED ==>', data);

        let updatedUsers = [{name, email, id}].concat(users);

        setUsers(updatedUsers);
    }


    //delete contact function
    const handleDeleteContact = async (id) => {
        let url = `https://jsonplaceholder.typicode.com/users/${id}`
        await fetch(url, {
            method: "DELETE"
        });

        let updatedUsers = users.filter((user)=> user.id !== id);

        setUsers(updatedUsers);
        console.log('USER DELETED !!!');
    }

    const handleUpdateContact = async (name,email,id)=>{
        let url = `https://jsonplaceholder.typicode.com/users/${id}`
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                id,
                name,
                email,
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            },
        });   
        const data = await response.json()
        console.log('CONTACT UPDATED ==>', data);

        let updatedUser = users.map((user) => {
            if(user.id === id){
                user.name = name;
                user.email = email;
            }
            return user
        });

        setUsers(updatedUser);
    }

    let number = 1
    return (
        <div className="container">
            <ContactForm addContact={handleAddContact}/>

            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th className="text-center" scope="col">#</th>
                        <th className="text-center" scope="col">Name</th>
                        <th className="text-center" scope="col">Email</th>
                        <th className="text-center" scope="col" colSpan={2}>Operations</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                            <ContactTable
                                number={number++}
                                id={user.id}
                                name={user.name}
                                email={user.email}
                                key={user.id}
                                handleDelete={handleDeleteContact}
                                handleUpdate={handleUpdateContact}
                            />
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contacts;









// <table className="table table-success table-striped ">
//                 <thead>
//                     <tr>
//                         <th className="text-center" scope="col">
//                             #
//                         </th>
//                         <th className="text-center" scope="col">
//                             Name
//                         </th>
//                         <th className="text-center" scope="col">
//                             Email
//                         </th>
//                         <th className="text-center" scope="col" colSpan={2}>
//                             Operations
//                         </th>
//                     </tr>
//                     <tbody>
//                         {user.map((item) => (
//                             <ContactTable
//                                 name={item.name}
//                                 email={item.email}
//                                 key={item.id}
//                             />
//                         ))}
//                     </tbody>
//                 </thead>
//             </table>