import { Field, Int, ObjectType } from "@nestjs/graphql";
import { WeightModel } from "./weight.model";

@ObjectType()
export class CatModel {
  @Field({nullable: true})
  weight: WeightModel;

  @Field({nullable: true})
  id: string;

  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  vetstreet_url: string;

  @Field({nullable: true})
  temperament: string;

  @Field({nullable: true})
  origin: string;

  @Field({nullable: true})
  country_codes: string;

  @Field({nullable: true})
  country_code: string;

  @Field({nullable: true})
  description: string;

  @Field({nullable: true})
  life_span: string;

  @Field(() => Int)
  indoor: number;

  @Field({nullable: true})
  alt_names: string;

  @Field(() => Int)
  adaptability: number;

  @Field(() => Int)
  affection_level: number;

  @Field(() => Int)
  child_friendly: number;

  @Field(() => Int)
  dog_friendly: number;

  @Field(() => Int)
  energy_level: number;

  @Field(() => Int)
  grooming: number;

  @Field(() => Int)
  health_issues: number;

  @Field(() => Int)
  intelligence: number;

  @Field(() => Int)
  shedding_level: number;

  @Field(() => Int)
  social_needs: number;

  @Field(() => Int)
  stranger_friendly: number;

  @Field(() => Int)
  vocalisation: number;

  @Field(() => Int)
  experimental: number;

  @Field(() => Int)
  hairless: number;

  @Field(() => Int)
  natural: number;

  @Field(() => Int)
  rare: number;

  @Field(() => Int)
  rex: number;

  @Field(() => Int)
  suppressed_tail: number;

  @Field(() => Int)
  short_legs: number;

  @Field({nullable: true})
  wikipedia_url: string;

  @Field(() => Int)
  hypoallergenic: number;

  @Field({nullable: true})
  reference_image_id: string;
}
