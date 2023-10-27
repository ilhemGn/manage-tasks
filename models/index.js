const { Sequelize } = require('sequelize');

/*Création d'une instance de Sequelize*/
const sequelize = new Sequelize('tasksdb', 'root', 'password', {
  host: 'mariadb',
  dialect: 'mariadb',
  logging: false
});

const db = {};

/*Ajout de Sequelize et de l'instance sequelize à l'objet db*/
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/*Ajout de modèle à l'objet db*/
db.task = require('./task.js')(sequelize, Sequelize);

/*Exportation de l'objet db*/
module.exports = db;

