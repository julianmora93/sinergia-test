import { Injectable } from "@nestjs/common";
import { CatsServiceInterface } from "../interfaces/cats.service.interface";
import { CatRepository } from "src/domain/repositories/cat.repository";
import { CatEntity } from "src/domain/entities/cat.entity";

@Injectable()
export class CatsService implements CatsServiceInterface {
    
    constructor(private readonly catRepository: CatRepository) {}
  
    // async getAllCats(): Promise<CatEntity[]> {
    //     return this.catRepository.getAll();
    // }

    // async getCatById(id: string): Promise<CatEntity | null> {
    //     return this.catRepository.getById(id);
    // }

    // async searchCats(param1: any, param2: any, param3: any): Promise<CatEntity[]> {
    //     return this.catRepository.search(param1, param2, param3);
    // }

    getAllCats = ():  Promise<CatEntity[]> => this.catRepository.getAll();

    getCatById = (id: string): Promise<CatEntity | null> => this.catRepository.getById(id);

    searchCats = (param1: any, param2: any, param3: any): Promise<CatEntity[]> => this.catRepository.search(param1, param2, param3);

}