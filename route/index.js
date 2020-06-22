const express = require('express')
const router = express.Router()
const { reply } = require('../module/util')
const constant = require('../config/constant')
const parkingLotController = require('../controller/parkingLotController')
const vehicleController = require('../controller/vehicleController')

// home
router.get('/', (req, res) => reply(res, { message: 'hello' }))

// route
router.post('/parking_lot', parkingLotController.createParkingLot)
router.get('/parking_lot/status', parkingLotController.getParkingLotStacks)
router.post('/vehicle/park', vehicleController.park)
router.post('/vehicle/exit', vehicleController.exit)
// 404
router.get('*', (req, res) => reply(res, { code: constant.HTTP_CODE.NOT_FOUND }))

module.exports = router
