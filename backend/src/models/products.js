import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js'

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

await sequelize.sync();

console.log('Tabela de produtos sincronizada!')

export default Product