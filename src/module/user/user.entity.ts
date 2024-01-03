import { BaseEntity } from "@entity";
import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsString } from "class-validator";
import { encodePassword } from "@shared";
import { BeforeInsert, Column, Entity } from "typeorm";


@Entity()
export class User extends BaseEntity {

    @Column()
    @IsString()
    @ApiProperty({
        example: faker.person.firstName()
    })
    name: string

    @Column()
    @IsString()
    @ApiProperty({
        example: faker.internet.email()
    })
    username: string

    @Column({
        nullable: true
    })
    @IsString()
    @ApiProperty({
        example: faker.internet.password()
    })
    password: string

    @BeforeInsert()
    async hashPassword() {
        this.password = await encodePassword(this.password)
    }

    @Column({
        nullable: true
    })
    @IsString()
    @ApiProperty({
        example: faker.image.avatar()
    })
    avatar?: string

    @Column()
    @IsDateString()
    @ApiProperty({
        example: faker.date.birthdate()
    })
    birthDate?: Date

    @Column({
        default: false
    })
    @IsBoolean()
    @ApiProperty({
        example: faker.datatype.boolean()
    })
    isActived: Boolean
}