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

        const fetchActivites = async () => {
            const response = await fetch(`http://localhost:3001/activities/${id}`)
            const data = response.json()
            setActivities(data)

        }

        const fetchDestinations = async () => {
            const response = await fetch(`http://localhost:3001/trips_destinations/destinations/${id}`)
            const data = response.json()
            setDestinations(data)
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
