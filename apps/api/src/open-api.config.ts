import { DocumentBuilder } from "@nestjs/swagger";

export const openApiConfig = new DocumentBuilder()
    .setTitle('Ticketo API')
    .setDescription('Ticketo API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build()