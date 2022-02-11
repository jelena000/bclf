module.exports = {
  port: process.env.PORT || 3001,
  db: {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'skocimis',
    port: 5432,
  },
  dburi : 'postgres://postgres:postgres@localhost:5432/postgres',
  serverSecretKey : 'AAAAB3NzaC1yc2EAAAABJQBBAQYYhq4rGOpVYmfUYZ8FATEKnULhoBV6G7jXoib9'
};

