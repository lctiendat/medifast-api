import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "@entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Category])
    ],
    controllers: [],
    providers: [],
    exports: []
})

export class CategoryModule { }