module.exports = {
  development: {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_NAME,
  },
  test: {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "roku",
    password: "roku",
    database: "test",
  },
  production: {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "roku",
    password: "roku",
    database: "prod",
  },
};
