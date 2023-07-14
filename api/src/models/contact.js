module.exports = function (sequelize, DataTypes) {
    const Contact = sequelize.define('Contact', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Nombre".'
          }
        }
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Email".'
          },
          isEmail: {
            msg: 'Por favor, rellena el campo "Email" con un email válido.'
          }
        }
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Por favor, rellena el campo "Mensaje".'
          }
        }
      }
    }, {
      sequelize,
      tableName: 'Contacts',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    })
  
    Contact.associate = function (models) {
    }
  
    return Contact
  }