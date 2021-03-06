module.exports = function (sequelize, DataTypes) {
  const VehicleSize = sequelize.define('VehicleSize', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'vehicle_size',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })

  return VehicleSize
}
