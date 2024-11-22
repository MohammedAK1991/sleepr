import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  async findAll() {
    return this.usersRepository.find({});
  }

  async findOne(query) {
    return this.usersRepository.findOne(query);
  }
}
