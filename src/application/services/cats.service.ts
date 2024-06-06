import { HttpService } from "@nestjs/axios";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { catchError, firstValueFrom, map } from "rxjs";
import { BreedEntity } from "src/domain/entities/breed.entity";
import { CatEntity } from "src/domain/entities/cat.entity";
import { ImageEntity } from "src/domain/entities/image.entity";

@Injectable()
export class CatsService {
    
    private readonly _baseEndpoint: string = 'https://api.thecatapi.com/v1';
    private readonly _header: any = { 'x-api-key': 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUPlive_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP' };
    private _axiosRequestConfig: AxiosRequestConfig;
    
    constructor(private readonly httpService: HttpService) {
        this._axiosRequestConfig = {
            headers: this._header
        };
    }

    getAll(): Promise<BreedEntity[] | null> {
        return firstValueFrom(
            this.httpService
            .get(
                `${this._baseEndpoint}/breeds?limit=100&order=asc`,
                this._axiosRequestConfig
            )
            .pipe(map((response ) => response.data))
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x001');
                })
            )
        );
    }

    getById(id: string): Promise<BreedEntity | null> {
        return firstValueFrom(
            this.httpService.get(
                `${this._baseEndpoint}/breeds/${id}`,
                this._axiosRequestConfig
            ).pipe(
                map((response ) => response.data)
            ).pipe(
                catchError((err) => {
                    if(err.response.status === 400 && err.response.data === 'INVALID_DATA'){
                        throw new ForbiddenException('No hay datos relacionados.', '0x003');
                    }
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x004');
                })
            )
        );
    }

    getImageById(id: string): Promise<ImageEntity[] | null> {
        return firstValueFrom(
            this.httpService.get(
                `${this._baseEndpoint}/images/search?breed_ids=${id}`,
                this._axiosRequestConfig
            ).pipe(
                map((response ) => response.data)
            ).pipe(
                catchError((err) => {
                    if(err.response.status === 400 && err.response.data === 'INVALID_DATA'){
                        throw new ForbiddenException('No hay datos relacionados.', '0x003');
                    }
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x004');
                })
            )
        );
    }

    search(q: string): Promise<BreedEntity[] | null> {
        return firstValueFrom(
            this.httpService.get(
                `${this._baseEndpoint}/breeds/search?q=${q}`,
                this._axiosRequestConfig
            ).pipe(
                map((response ) => response.data)
            ).pipe(
                catchError(() => {
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x005');
                })
            )
        );
    }

}