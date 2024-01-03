import { Injectable } from "@nestjs/common";
import { BaseService } from "@service";
import { UserRepository } from "@repository";
import { User } from "@entity";

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        public readonly repo: UserRepository
    ) {
        super(repo)
    }

    async checkUserExist(username: string): Promise<Boolean> {
        const user = await this.repo.getDataByUsername(username)
        return !!user
    }
}