// 1. Importo mongoose
import mongoose from 'mongoose'

// 2. Crear el schema
const carSchema = new mongoose.Schema({
  plate: { type: String, required: true },
  year: { type: Number, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  color: {
    type: String,
    required: true,
    enum: ['red', 'blue', 'black', 'white', 'silver', 'gray', 'green', 'yellow', 'orange', 'brown', 'purple', 'pink', 'gold']
  },
  carType: {
    type: String,
    required: true,
    enum: ['sedan', 'hatchback', 'suv', 'coupe', 'convertible', 'pickup', 'van', 'wagon', 'minivan', 'sport', 'luxury', 'hybrid', 'electric', 'compact']
  },
  vin: String, // Numero de serie del vehículo
  newCar: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }
}, { timestamps: true }) // agrega createdAt y updatedAt

// 3. Crear el modelo y exportarlo
// El modelo se crea siempre en singular (Car) y mongoose lo va a pluralizar en la base de datos
const Car = mongoose.model('Car', carSchema)
export default Car
