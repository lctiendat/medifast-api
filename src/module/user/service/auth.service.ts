import { User } from "@entity";
import { UserRepository } from "@repository";
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { BaseService, UserService } from "@service";

@Injectable()
export class AuthService extends BaseService<User> {
    constructor(
        public readonly repo: UserRepository,
        private readonly dataSource: DataSource,
        private userService: UserService
    ) {
        super(repo)
    }

    async signup(username: string, password: string): Promise<User> {
        if (!this.userService.checkUserExist(username)) {
            throw new Error('User already exists')
        }
        const user = await this.repo.create({
            username,
            password
        })
        await this.repo.save(user)
        return user
    }



}