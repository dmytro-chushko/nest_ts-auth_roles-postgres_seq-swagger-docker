import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Dialect } from "sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";

import { User } from "./users/users.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: process.env.DB_TYPE as Dialect,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_NAME,
      models: [User],
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
