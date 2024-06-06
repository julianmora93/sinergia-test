import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class WeightModel {
  @Field({nullable: true})
  imperial: string;

  @Field({nullable: true})
  metric: string;
}