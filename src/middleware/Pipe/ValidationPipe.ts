import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export default class ValidationPipes implements PipeTransform<any> {
    async transform(value, metadata: ArgumentMetadata) {
      const { metatype } = metadata;
      if (!metatype || !this.toValidate(metatype)) {
          return value;
      }
      const object = plainToClass(metatype, value);
      const errors = await validate(object);
      if (errors.length > 0) {
          let ValidationError = errors.shift();
          throw new RpcException({ code: 4043, message: JSON.stringify(ValidationError.constraints) });
      }
      return value;
    }

    private toValidate(metatype): boolean {
      const types = [String, Boolean, Number, Array, Object];
      return !types.find((type) => metatype === type);
    }
}