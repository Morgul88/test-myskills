import React, { useEffect, useState } from 'react';

function Character() {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState("Something went wrong");
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [warning, setWarning] = useState(false);

    useEffect(() => {
        getData();
        
    },[])

    function toggleForm(elementName) {
        console.log(elementName)
        const element = document.querySelector(elementName)
        element.classList.add('formadd')
        
        setTimeout(() => {
            element.classList.remove('formadd')
        }, 5000);
    }

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

    
    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };
    

    console.log("Characters state:", characters); 

    return (
        <>
            <button onClick={() => {toggleForm(".form")}}>Tryck här för att byta färg</button>
          
            <div className="form">Warning warning, alarm alarm, you are being attacked !</div>

            <button onClick={getData}>Get</button>
            {selectedCharacter && (
                    <div className="character-details">
                        <h2>Selected Character Details</h2>
                        <p><strong>Name:</strong> {selectedCharacter.name}</p>
                        <p><strong>Class:</strong> {selectedCharacter.class}</p>
                        <p><strong>Level:</strong> {selectedCharacter.level}</p>
                        <p><strong>Health:</strong> {selectedCharacter.health}</p>
                        <p><strong>Strength:</strong> {selectedCharacter.strength}</p>
                        <p><strong>Agility:</strong> {selectedCharacter.agility}</p>
                        <p><strong>Intelligence:</strong> {selectedCharacter.intelligence}</p>
                        <p><strong>Equipment:</strong> {selectedCharacter.equipment}</p>
                    </div>
                )}
                <div className='container'>
                    {
    
                    characters.length > 0 ? (
                        characters.map(c => (
                                <div key={c.id} className={`character-card ${selectedCharacter && selectedCharacter.id === c.id ? 'selected' : '' }`} onClick={() => handleCharacterClick(c)} style={{cursor : 'pointer' , backgroundColor: selectedCharacter && selectedCharacter.id === c.id ? 'black' : ''}} >
            
                                    <div className='cards'>
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
