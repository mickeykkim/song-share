const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'playlistmanager',
    user: process.env.DB_USER || 'playlistmanager',
    password: process.env.DB_PASS || 'playlistmanager',
    options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: path.resolve(__dirname, '../../song-share.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
