import { Resolver, Query, Args } from '@nestjs/graphql';
import { CatEntity } from '../../domain/entities/cat.entity';
import { CatsService } from 'src/application/services/cats.service';
import { BreedEntity } from 'src/domain/entities/breed.entity';

@Resolver(() => CatEntity)
export class CatsResolver {
    
    constructor(private readonly catsService: CatsService) {}

    @Query(() => [BreedEntity], { nullable: true })
    getAll(): Promise<BreedEntity[] | null> {
        return this.catsService.getAll()
    }

    @Query(() => BreedEntity, { nullable: true })
    getById(@Args('id') id: string): Promise<BreedEntity | null> {
        return this.catsService.getById(id);
    }

    @Query(() => [CatEntity], { nullable: true })
    seach(
        @Args('param1') param1: string,
        @Args('param2') param2: string,
        @Args('param3') param3: string
    ): Promise<CatEntity[] | null> {
        return this.catsService.search(param1, param2, param3);
    }
}