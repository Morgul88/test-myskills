import React, { useState } from 'react';

function Character() {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState("Something went wrong");

    async function getData() {

        const response = await fetch('https://localhost:7078/api/home', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            const error = response.status;
            setError(`Error: ${error}`);
            console.log(`Error fetching data: ${error}`);
            return;
        }

        const data = await response.json();
        console.log("Fetched data:", data); 
        setCharacters(data); 
    }

    console.log("Characters state:", characters); 

    return (
        <>
            <button onClick={getData}>Get</button>
                <div className='container'>
                    {
    
                    characters.length > 0 ? (
                        characters.map(c => (
                                <div className="character-card">
                                    <div key={c.id} className='cards'>
                                        <p className='name'>Name: {c.name}</p>
                                        <p className='class'>Class: {c.class}</p>
                                        <p className='level'>Level: {c.level}</p>
                                        <p className='health'>Health: {c.health}</p>
                                        <p className='strength'>Strength: {c.strenth}</p>
                                        <p className='agility'>Agility: {c.agility}</p>
                                        <p className='intelligence'>Int: {c.inteliigence}</p>
                                        <p className='equipment'>Equiptment: {c.equipment}</p>
                                    </div>
                                </div>

                        ))
                        ) : (
                            <p>Tryck på get för att hämta..</p>
                        )
                    }
                </div>
                
        </>
        
        
    );
}

export default Character;
