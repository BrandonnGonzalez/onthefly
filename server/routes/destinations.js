import express from 'express';
import DestinationsController from '../config/controllers/destinations.js';

const router = express.Router();

router.get('/', DestinationsController.getDestinations);
router.get('/:id', DestinationsController.getDestination);
router.post('/', DestinationsController.createDestination);
router.delete('/:id', DestinationsController.deleteDestination);
router.patch('/:id', DestinationsController.updateDestination);

export default router;
