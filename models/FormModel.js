import db from "../database/db";
import {DataTypes} from "sequelize";



    const FromModel = db.define('form',{
        id:{type: DataTypes.INTEGER,} ,
        name: {type: DataTypes.STRING,},
        email: {type: DataTypes.STRING,},
        content: {type: DataTypes.STRING,},
    });

export default FromModel;