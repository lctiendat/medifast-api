import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@entity";
import { AuthController, UserController } from "@controller";
import { UserService, AuthService } from "@service";
import { UserRepository } from "@repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UserController, AuthController],
    providers: [
        UserService,
        AuthService,
        UserRepository
    ],
    exports: []
})

export class UserModule { }