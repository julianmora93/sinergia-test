import { HttpService } from "@nestjs/axios";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { catchError, map } from "rxjs";

@Injectable()
export class ApiService {

    private readonly _endpointCat: string = 'https://api.thecatapi.com/v1/breeds?limit=2&order=asc&api_key=live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUPlive_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';

    constructor(private http: HttpService) {}

    getAll(){
        return this.http
            .get(this._endpointCat)
            .pipe(map((response ) => response .data))
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('Ocurrió un error en la consulta del API.', '0x001');
                })
            );
    }
 
}