import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('inventário-db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    await sequelize.authenticate();
    console.log('Conectado ao mySQL')
} catch (error) {
    console.log('Erro ao conectar', error)
}

export default sequelize;
