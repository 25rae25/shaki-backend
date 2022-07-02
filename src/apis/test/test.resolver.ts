import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTestInput } from './dto/createTest.input';
import { Test } from './entites/test.entity';
import { TestService } from './test.service';

@Resolver()
export class TestResolver {
  constructor(
    private readonly testService: TestService, //
  ) {}

  @Query(() => [Test])
  async fetchTest() {
    console.log(await this.testService.find());
    return await this.testService.find();
  }

  // @Query(() => [String])
  // async elasticSearchTest(
  //   @Args('name') name: string, //
  // ) {
  //   return await this.testService.elasticSearchTest({ name });
  // }

  @Mutation(() => Test)
  async createTest(@Args('createTest') createTestInput: CreateTestInput) {
    return await this.testService.create({ createTestInput });
  }

  @Mutation(() => String)
  async redisTest() {
    return await this.testService.redisTest();
  }
}
