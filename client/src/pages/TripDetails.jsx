import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import './TripDetails.css';

const TripDetails = ({ data }) => {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            const result = data.filter(item => item.id === parseInt(id));
            if (result.length > 0) {
                setTrip(result[0]);
            }
        }
    }, [data, id]);

    if (!trip) {
        return <div>Loading trip details...</div>
    }

    return (
        <div className="TripDetails">
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
            <p><strong>Destinations:</strong></p>
            <Link to={`/edit/${id}`}><button>Edit Trip</button></Link>
        </div>
    )
}

export default TripDetails;
