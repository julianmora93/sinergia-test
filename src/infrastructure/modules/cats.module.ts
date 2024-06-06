import { Module } from '@nestjs/common';
import { CatsService } from '../../application/services/cats.service';
import { CatsResolver } from '../resolvers/cats.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [
        CatsResolver,
        CatsService
    ],
    exports: [CatsService]
})
export class CatsModule {}