import { CatEntity } from "../entities/cat.entity";

export interface CatRepository {
    getAll(): Promise<CatEntity[]>;
    getById(id: string): Promise<CatEntity | null>;
    search(param1: any, param2: any, param3: any): Promise<CatEntity[] | null>;
}