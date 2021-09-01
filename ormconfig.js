
const AdminUser = require('nestjs-admin').AdminUserEntity;

module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nestjsusers',
  entities: [__dirname + '/dist/**/*.entity.js', AdminUser],
  migrations: ['dist/migration/*.js'],
  synchronize: false,
};