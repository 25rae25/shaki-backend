import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
  ) {}

  getAccessToken() {
    const accessToken = this.jwtService.sign(
      { email: 'aaa', sub: 'bbb' },
      { secret: 'accesskey', expiresIn: '1h' },
    );
    return accessToken;
  }

  getRefreshToKen({}) {
    const refreshToken = this.jwtService.sign(
      { email: 'aaa', sub: 'bbb' },
      { secret: 'refreshkey', expiresIn: '2w' },
    );
    return refreshToken;
  }
}
