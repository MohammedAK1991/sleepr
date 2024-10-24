import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NextConfigModule,
} from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    NextConfigModule.forRoot({
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
