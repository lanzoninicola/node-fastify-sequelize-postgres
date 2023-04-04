const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        useUTC: false
    },
    pool: {
        max: Number(process.env.DB_POOL_MAX),
        min: Number(process.env.DB_POOL_MIN),
        acquire: Number(process.env.DB_POOL_ACQUIRE),
        idle: Number(process.env.DB_POOL_IDLE)
    },
    timezone: "America/Sao_Paulo",
    define: {
        freezeTableName: true,
        timestamps: true
    },
    // Prevent sequelize to output SQL queries in console
    logging: false
});

module.exports.sequelize = sequelize;
module.exports.initDatabase = async options => {
    await sequelize.sync(options);
};
