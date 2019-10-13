// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
    database: 'quiz1',
    username: 'dustin',
    password: '5643'
    },
    migrations: {
      directory: "./db/migrations"
    }
  }
};