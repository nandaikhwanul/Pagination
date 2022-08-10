import sequelize from "sequelize";
import db from "../Config/database.js";

const {DataTypes} = sequelize;

const Page = db.define('pagination', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});
export default Page;

// (async()=>{
//     await Page.sync();
// })();
