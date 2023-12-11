import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "@controller";


@Module({
    imports: [],
    controllers: [CategoryController],
    providers: [],
    exports: []
})

export class OtherModule {}