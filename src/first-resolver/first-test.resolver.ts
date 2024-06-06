//import { HttpService } from '@nestjs/axios';
//import { Inject } from '@nestjs/common';
import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';
import { firstValueFrom, pipe } from 'rxjs';
import { ApiService } from 'src/api/api.service';
import { CatModel } from 'src/models/cat.model';
// import { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { CatModel } from 'src/models/cat.model';
//import { BreedService } from 'src/services/breed.service';

@Resolver()
export class FirstTestResolver {

    //private readonly _endpointCat: string = 'https://api.thecatapi.com/v1/breeds?limit=2&order=asc&api_key=live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUPlive_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';

    constructor(
        //@Inject(BreedService) private breedService: BreedService
        //private readonly httpService: HttpService
        //private readonly breedService: BreedService
        private readonly apiService: ApiService
    ){}

    @Query(() => String, { description: 'Primer query con NestJS & GgraphQL'})
    firstTestQuery(): string {
        return 'Primer ejemplo GraphQL';
    }

    @Query(() => Float, { 
        name: 'randomNumber', 
        description: 'Número aleatorio' 
    })
    getRandomNumberr(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { 
        name: 'randomFromZeroTo', 
        description: 'Método que retorna un número aleatorio de 0 a 10'
    })
    getRandomFromZeroTo(): number {
        return Math.floor(Math.random() * 45);
    }

    @Query(() => Int, { name: 'randomByParameters', description: 'Método que retorna un número aleatorio basado en dos parámetro'})
    getRandomByParameters(
        @Args('minValue', { type: () => Int }) minValue: number, 
        @Args('maxValue', { type: () => Int, nullable: true }) maxValue: number | null = (minValue + 10)
    ): number {
        return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    }

    @Query(() => [CatModel])
    serviceCat() {
        // return await new Promise<CatModel[]>((resolve, reject) => {
        //     this.apiService.getAll().subscribe({
        //         next: data => resolve(data),
        //         error: err => reject(err)
        //     });
        // });
        return firstValueFrom(this.apiService.getAll())
    }


}