import { Resolver, Query, Args } from '@nestjs/graphql';
import { CatsServiceInterface } from '../../application/interfaces/cats.service.interface';
import { CatEntity } from '../../domain/entities/cat.entity';

@Resolver(() => CatEntity)
export class CatsResolver {
    
    constructor(private readonly catsService: CatsServiceInterface) {}

    @Query(() => [CatEntity])
    getAll(): Promise<CatEntity[]> {
        return this.catsService.getAllCats();
    }

    @Query(() => CatEntity, { nullable: true })
    getById(@Args('id') id: string): Promise<CatEntity | null> {
        return this.catsService.getCatById(id);
    }

    @Query(() => [CatEntity], { nullable: true })
    seach(
        @Args('param1') param1: string,
        @Args('param2') param2: string,
        @Args('param3') param3: string
    ): Promise<CatEntity[] | null> {
        return this.catsService.searchCats(param1, param2, param3);
    }

//   @Query(() => [CatEntity])
//   async cats() {
//     return firstValueFrom(this.catsService.getAllCats());
//   }
}