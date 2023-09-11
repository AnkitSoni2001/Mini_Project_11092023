const sequelize = require('../config/sequelize');
const { Model, DataTypes } = require('sequelize');

class User extends Model { 
    name;
    email;
    password;

}

User.init(
    {
        name: {
            type:DataTypes.STRING,
            required:true
        },
        email: {
            type: DataTypes.STRING,
            primaryKey:true,
            required:true,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            required:true,
            minlength:8
        }
    },
    {
        sequelize,
        modelName: 'Users',
    }
);

module.exports = User;
