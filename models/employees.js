module.exports = function(sequelize, DataTypes) {
    const Employees = sequelize.define('Employees', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    });
    return Employees;
  };