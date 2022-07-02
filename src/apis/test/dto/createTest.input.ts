import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateTestInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  unit: string;
}
