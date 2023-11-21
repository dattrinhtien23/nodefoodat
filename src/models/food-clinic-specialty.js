'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Food_Clinic_Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Food_Clinic_Specialty.init({
        foodId: DataTypes.STRING,
        typeId: DataTypes.TEXT,
        specialtyId: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Food_Clinic_Specialty',
    });
    return Food_Clinic_Specialty;
};