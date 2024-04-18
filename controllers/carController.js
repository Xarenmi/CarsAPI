import Car from '../models/Car.js'

// Create
const createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body)
    res.status(201).json(newCar)
  } catch (error) {
    res.status(400).json({ msg: 'Error creating car', error })
  }
}

// Read

// Get all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find()
    res.status(200).json(cars)
  } catch (error) {
    res.status(400).json({ msg: 'Error getting cars', error })
  }
}

// Get car by id
const getCarById = async (req, res) => {
  try {
    const cars = await Car.findById(req.params.carId)
    res.status(200).json(cars)
  } catch (error) {
    res.status(400).json({ msg: 'Error getting car by id', error })
  }
}

// Update
const updateByCarById = async (req, res) => {
  if (Object.keys(req.body).length === 0) return res.status(400).json({ msg: 'No data to update' })
  try {
    const updateCar = await Car.findByIdAndUpdate(req.params.carId, req.body, { new: true })
    res.status(200).json(updateCar)
  } catch (error) {
    res.status(400).json({ msg: 'Error updating car', error })
  }
}

// Delete

export {
  createCar,
  getCars,
  getCarById,
  updateByCarById
}
