import { Module } from '@nestjs/common';
import { CatsService } from '../../application/services/cats.service';
import { CatsResolver } from '../resolvers/cats.resolver';
import { CatRepositoryImpl } from '../repositories/cat.repository.impl';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [
        CatsResolver,
        CatsService,
        CatRepositoryImpl
        // {
        //   provide: 'CatRepository',
        //   useClass: CatRepositoryImpl,
        // },
        // {
        //   provide: 'CatsServiceInterface',
        //   useClass: CatsService,
        // },
    ],
    exports: [
        CatsService,
        CatRepositoryImpl
    ]
})
export class CatsModule {}