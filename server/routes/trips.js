import express from 'express'
import TripsController from '../config/controllers/trips.js'

const router = express.Router();

// defining the route handlers for the /trips endpoint using the corresponding controller functions from the TripsController
router.get('/', TripsController.getTrips);
router.get('/:id', TripsController.getTrip);
router.post('/', TripsController.createTrip);
router.delete('/:id', TripsController.deleteTrip);
router.patch('/:id', TripsController.updateTrip);


export default router