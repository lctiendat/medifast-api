import { BaseEntity } from "@entity";
import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { Column, Entity, OneToMany } from "typeorm";



@Entity()

export class Category extends BaseEntity {
    
    @Column()
    @IsString()
    @ApiProperty({ example: faker.lorem.paragraph() })
    name: string

    @Column()
    @IsUUID()
    @ApiProperty({ example: faker.string.uuid() })
    parentId: string

    @OneToMany(() => Category, category => category.parentId)
    parent: Category[]
}