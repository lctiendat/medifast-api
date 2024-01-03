import { Base } from "@repository";
import { User } from "@entity";
import { DataSource } from "typeorm";


export class UserRepository extends Base<User> {
    constructor(
        private readonly dataSource: DataSource
    ) {
        super(User, dataSource.createEntityManager());
    }

    async getDataByUsername(username: string): Promise<User> {
        return await this.findOneBy({ username })
    }
}