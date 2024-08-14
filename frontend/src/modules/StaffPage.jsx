import React, { useState } from 'react';
// import StaffRow from "../components/StaffRow.js";
import { GiPerson } from 'react-icons/gi';
import { FaUserPlus } from 'react-icons/fa';

function StaffPage(){
    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
            setResults(response.results);
            })
            .catch(() => {
            alert("Hmmm. The Random User Generator Server seems to be down. Try again later.");
            });
        };
        return (
        <>
        <h2><i><GiPerson /></i>User List</h2>
        <article id="staff">
        <p>People listed below are based on the <cite><a href="https://randomuser.me/" target="_blank" rel="noreferrer">Random User Generator</a> API</cite>,   
         which provides randomly-generated data for testing users.</p>

        <p>
            <button id="fromServer" onClick={fetchResults} value="add"><FaUserPlus /> Fetch 10 users</button> 
        </p>
        
        <table id="staff">
            <caption>Your Colleagues</caption>
            <thead>
                <tr>
                <th>Portrait</th>
                <th>Name &amp; Email</th>
                <th>Phone</th>
                <th>Timezone</th>
                </tr>
            </thead>

            <tbody>
                {/* {results.map((person, index) => <StaffRow person={person} key={index} />)} */}
                {results.map((person) => 
                    <tr key="person">
                        <td>
                        <img src={person.picture.thumbnail} alt="Random portrait" /> 
                        </td>
                        <td>
                            <a href={"mailto:" + person.email}>
                            {person.name.first}&nbsp;
                            {person.name.last}</a>
                        </td> 
                        <td>{person.phone}</td> 
                        <td>{person.location.timezone.description}</td>
                    </tr>
                    )}

            </tbody>
            </table>
            </article>
            </>
    );
 
}


export default StaffPage;