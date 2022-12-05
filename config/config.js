module.exports = 
{
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "ricky",
    "password": process.env.DB_PASSWQRD,
    "database": "fifty-states-visited-database",
    "host": "fifty-states-visited-database-server-ricky.database.windows.net",
    "dialect": "mssql"
  }
}
