module.exports = (sequelize, DataTypes) => {
    return sequelize.define('book', {
        nameOfBook: {
            type: DataTypes.STRING,
        },
        author: { 
            type: DataTypes.STRING

        },
        genre: {
            type: DataTypes.ENUM,
            values: ['SCI-FI', 'ROMANCE', 'COMEDEY', 'ACTION', 'FANTASY']

        },
        pubYear: {
            type: DataTypes.INTEGER

        },
        rating: {
            type: DataTypes.RANGE,
            defaultValue: 1,
            validate: { min: 1, max: 5}
        }
    })
}