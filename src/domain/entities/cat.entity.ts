export class CatEntity {
    breeds: Breed[];
    id: string;
    url: string;
    width: number;
    height: number;

    constructor(breeds: Breed[], id: string, url: string, width: number, height: number) {
        this.breeds = breeds;
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }

    getBreedNames(): string[] {
        return this.breeds.map(breed => breed.name);
    }

}