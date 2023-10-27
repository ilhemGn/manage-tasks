/*declarer le modele de la table task*/
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

