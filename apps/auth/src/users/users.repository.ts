import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UserDocument } from './models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
  protected logger: Logger;

  constructor(
    @InjectModel(UserDocument.name)
    private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
    this.logger = new Logger(UsersRepository.name);
  }
}
