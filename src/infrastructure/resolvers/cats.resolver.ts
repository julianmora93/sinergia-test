import { Resolver, Query, Args } from '@nestjs/graphql';
import { CatEntity } from '../../domain/entities/cat.entity';
import { CatsService } from 'src/application/services/cats.service';
import { BreedEntity } from 'src/domain/entities/breed.entity';
import { ImageEntity } from 'src/domain/entities/image.entity';

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

    @Query(() => [ImageEntity], { nullable: true })
    getImageById(@Args('id') id: string): Promise<ImageEntity[] | null> {
        return this.catsService.getImageById(id);
    }

    @Query(() => [BreedEntity], { nullable: true })
    search(@Args('q') q: string): Promise<BreedEntity[] | null> {
        return this.catsService.search(q);
    }
}