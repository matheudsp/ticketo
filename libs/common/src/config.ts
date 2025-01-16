import * as dotenv from 'dotenv';
import { join } from 'path';

const envPath = join(__dirname, '../../../.env'); // Caminho relativo para o .env na raiz
dotenv.config({ path: envPath });

export const config = {
    server: {
        host: process.env.HOST || 'localhost', // Valor padrão caso não exista no .env
        port: Number(process.env.PORT) || 3000,
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
    // ... outras configurações
    security: {
      accessTokenKey: process.env.ACCESS_TOKEN_KEY || "ACCESS_TOKEN_KEY",
      refreshTokenKey: process.env.REFRESH_TOKEN_KEY || "REFRESH_TOKEN_KEY",
      accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION || "1h",
      refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION || "7d",
    },
    redis: {
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
    },
    smtp: {
      host: process.env.MAIL_HOST || 'sandbox.smtp.mailtrap.io',
      port: Number(process.env.MAIL_PORT) || 2525,
      address: process.env.MAIL_ADDRESS || "example@example.com",
      password: process.env.MAIL_PASSWORD || "password",
      from: process.env.MAIL_FROM || "example@example.com",
    },
};