import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class WeightEntity {
    
    @Field({nullable: true})
    imperial: string;

    @Field({nullable: true})
    metric: string;
    
}