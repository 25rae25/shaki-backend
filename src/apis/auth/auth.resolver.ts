import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Mutation(() => String)
  getAccessToken() {
    return this.authService.getAccessToken();
  }

  @Mutation(() => String)
  getRefreshToken() {
    return this.authService.getRefreshToKen({});
  }
}
