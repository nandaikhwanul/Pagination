import sequelize from "sequelize";

const db = new sequelize('pagination','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;