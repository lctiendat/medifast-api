import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsUUID } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { faker } from '@faker-js/faker';


@Entity()
export class Base {

    @PrimaryGeneratedColumn('uuid')
    @IsUUID()
    @ApiProperty({
        example: faker.datatype.uuid()
    })
    id?: string

    @Column({
        default: false
    })
    @IsBoolean()
    @ApiProperty({
        example: false
    })
    isDeleted: boolean

    @CreateDateColumn()
    @IsDateString()
    @ApiProperty({
        example: faker.date.past().toISOString()
    })
    createdAt: Date

    @UpdateDateColumn()
    @IsDateString()
    @ApiProperty({
        example: faker.date.past().toISOString()
    })
    updatedAt: Date

}