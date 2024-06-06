import { Field, ObjectType } from "@nestjs/graphql";
import { BreedEntity } from "./breed.entity";

@ObjectType()
export class CatEntity {

    @Field(() => [BreedEntity], {nullable: true})
    breeds: BreedEntity[];

    @Field({nullable: true})
    id: string;

    @Field({nullable: true})
    url: string;

    @Field({nullable: true})
    width: number;

    @Field({nullable: true})
    height: number;
    
}