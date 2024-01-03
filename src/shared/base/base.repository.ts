import { ObjectLiteral, Repository } from "typeorm";



export class Base<T extends ObjectLiteral> extends Repository<T>{}