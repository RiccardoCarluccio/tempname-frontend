import React from 'react';
import axios from 'axios';

const MyComponent = () => {
    const handleButtonClick = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/do-something'); // Assicurati che la porta sia corretta
            console.log(response.data); // Axios restituisce direttamente i dati nella proprietà data
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <button onClick={handleButtonClick}>Fai Qualcosa</button>
    );
};

export default MyComponent;