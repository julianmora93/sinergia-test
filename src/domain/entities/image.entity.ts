import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ImageEntity {

    @Field({nullable: true})
    id: string;

    @Field({nullable: true})
    width: number;

    @Field({nullable: true})
    height: number;

    @Field({nullable: true})
    url: string;

}