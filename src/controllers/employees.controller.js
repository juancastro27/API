import { pool } from '../db.js'

export const getEmployees = async (req, res) => { 
    try{
    throw new Error('Mi error')
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
} catch (error) {
    return res.status(500).json({
        message:'Algo va mal'
    })
  }
} 

export const getEmployee = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    
    if(rows.length <= 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })
        res.json(rows[0])
}



export const createEmployees = (req,res) => res.send('Creando Empleados')

export const updateEmployee = async (req,res) => {
    const {id} = req.params
    const {name, salary} = req.body

    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })
   
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows[0])
}



export const deleteEmployee = async (req,res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    
    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Empleado no encontrado'
    })

    res.sendStatus(204)

} 