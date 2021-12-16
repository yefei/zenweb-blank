import { create } from 'zenweb';
import dbConfig from './config/db.js';

export const app = create({
  core: {
    proxy: true,
  },
  api: {
    failCode: 500,
    failStatus: 200,
    success(data) {
      return { code: 200, data };
    },
  },
  sentry: process.env.SENTRY_DSN ? { dsn: process.env.SENTRY_DSN } : null,
  // metric: {},
  cors: { origin: '*' },
  mysql: dbConfig.mysql,
  messageCode: {},
  orm: {},
  form: {},
  body: {
    multipart: true, // 上传文件支持
  } 
});

app.start();
