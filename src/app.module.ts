import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig } from '@setup';
import { CategoryModule } from '@module';

@Module({
  imports: [
    CategoryModule,
    TypeOrmModule.forRoot({
      'type': 'mysql',
      'host': appConfig.DB_HOST,
      'port': appConfig.DB_PORT,
      'username': appConfig.DB_USERNAME,
      'password': appConfig.DB_PASSWORD,
      'database': appConfig.DB_NAME,
      'autoLoadEntities': true,
      'synchronize': true,
    }),
  ],
  controllers: [
   
  ],
  providers: [],
})
export class AppModule { }

