

module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    facilities: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return Events;
};
