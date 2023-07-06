import {Sequelize} from 'sequelize'

const db = new Sequelize('React','juanan','1234',{
    host: 'localhost',
    dialect: 'mysql',
 
})

export default db 

