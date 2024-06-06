import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CatRepository } from '../../domain/repositories/cat.repository';
import { CatEntity } from '../../domain/entities/cat.entity';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class CatRepositoryImpl implements CatRepository {

    private readonly _baseEndpoint: string = 'https://api.thecatapi.com/v1';
    private readonly _header: any = { 'x-api-key': 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUPlive_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP' };
    private _axiosRequestConfig: AxiosRequestConfig;
    
    constructor(private readonly httpService: HttpService) {
        this._axiosRequestConfig = {
            headers: this._header
        };
    }

    // async getAll(): Promise<CatEntity[]> {
    //     const response: AxiosResponse<CatEntity[], any> = await firstValueFrom(
    //         this.httpService.get(
    //             `${this._baseEndpoint}/breeds?limit=1000&order=asc`, 
    //             this._axiosRequestConfig
    //         )
    //     );
    //     return response.data;
    // }

    // async getById(id: string): Promise<CatEntity | null> {
    //     const response: AxiosResponse<CatEntity | null, any> = await firstValueFrom(
    //         this.httpService.get(
    //             `${this._baseEndpoint}/breeds/${id}`, 
    //             this._axiosRequestConfig
    //         )
    //     );
    //     return response.data;
    // }

    // async search(_param1: any, _param2: any, _param3: any): Promise<CatEntity[] | null> {
    //     const response = await firstValueFrom(
    //         this.httpService.get(
    //             `${this._baseEndpoint}/images/search?format=json&size=med&order=ASC&page=0&limit=10&has_breeds=true&include_breeds=true&include_categories=false`,
    //             this._axiosRequestConfig
    //         )
    //     );
    //     return response.data;
    // }

    async getAll(): Promise<CatEntity[]> {
        const response: AxiosResponse<CatEntity[], any> = await firstValueFrom(
            this.httpService.get(
                `${this._baseEndpoint}/breeds?limit=1000&order=asc`, 
                this._axiosRequestConfig
            ).pipe(
                map((response ) => response .data)
            ).pipe(
                catchError(() => {
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x001');
                })
            )
        );
        return response.data;
    }

    async getById(id: string): Promise<CatEntity | null> {
        const response: AxiosResponse<CatEntity | null, any> = await firstValueFrom(
            this.httpService.get(
                `${this._baseEndpoint}/breeds/${id}`, 
                this._axiosRequestConfig
            ).pipe(
                map((response ) => response .data)
            ).pipe(
                catchError(() => {
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x002');
                })
            )
        );
        return response.data;
    }

    async search(_param1: any, _param2: any, _param3: any): Promise<CatEntity[] | null> {
        const response = await firstValueFrom(
            this.httpService.get(
                `${this._baseEndpoint}/images/search?format=json&size=med&order=ASC&page=0&limit=10&has_breeds=true&include_breeds=true&include_categories=false`,
                this._axiosRequestConfig
            ).pipe(
                map((response ) => response .data)
            ).pipe(
                catchError(() => {
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x003');
                })
            )
        );
        return response.data;
    }
}