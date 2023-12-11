import { Column, Entity } from "typeorm";
import { Base } from "@entity";
import { IsOptional, IsString, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";

@Entity()
export class Category extends Base {
    @Column()
    @IsString()
    @ApiProperty({
        example: faker.lorem.word(),
    })
    name : string

    @Column()
    @IsUUID()
    @IsOptional()
    @ApiProperty({
        example: faker.datatype.uuid(),
    })
    parentId? : string
}