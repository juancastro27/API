import express from 'express'

import employeesRoutes from './routes/employees.routes.js'

const app = express()

app.use(express.json())

app.use('/api',employeesRoutes)

app.listen(5000)
console.log('Servidor en puerto', 5000)
