import { Sequelize } from "sequelize";
 
const db = new Sequelize('coinminer', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;