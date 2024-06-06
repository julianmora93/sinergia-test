import { CatEntity } from "src/domain/entities/cat.entity";

export interface CatsServiceInterface {
    getAllCats(): Promise<CatEntity[]>;
    getCatById(id: string): Promise<CatEntity | null>;
    searchCats(param1: any, param2: any, param3: any): Promise<CatEntity[] | null>;
}