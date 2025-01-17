import { Injectable } from '@nestjs/common';
import { UserClient } from './user.client';

@Injectable()
export class UserService {
    constructor(
        private readonly userClient: UserClient
    ){}
}
