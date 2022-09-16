import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

function Contacts() {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setUser(data);
    };

    useEffect(() => {
        // call the function
        fetchData();
        console.log(user);
    }, []);

    let number = 1
    return (
        <div className="container">
            <ContactForm />

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
                {user.map((item) => (
                            <ContactTable
                                number={number++}
                                name={item.name}
                                email={item.email}
                                key={item.id}
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