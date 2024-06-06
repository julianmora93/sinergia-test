import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { FirstTestResolver } from 'src/first-resolver/first-test.resolver';
//import { BreedModule } from 'src/modules/breed.module';

@Module({
    providers: [ApiService, FirstTestResolver],
    imports: [
        HttpModule
    ], 
    exports: [ApiService]
})
export class FirstTestModule {}