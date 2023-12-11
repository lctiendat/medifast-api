import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig } from '@setup';
import { OtherModule } from '@module';
import { CategoryController } from './module/other/controller';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //    'type': 'mysql',
    //    'host': appConfig.DB_HOST,
    //    'port': appConfig.DB_PORT,
    //    'username': appConfig.DB_USERNAME,
    //    'password': appConfig.DB_PASSWORD,
    //    'database': appConfig.DB_NAME,
    //    'entities': ['dist/**/*.model{.ts,.js}'],
    //    'synchronize': true,
    // })
    // OtherModule
  ],
  controllers: [
    CategoryController
  ],
  providers: [],
})
export class AppModule {}

