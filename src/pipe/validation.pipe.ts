import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exeption/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: string, metadata: ArgumentMetadata): Promise<string> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      const messages = errors.map(err => {
        return `${err.property} - ${Object.values(err.constraints).join(", ")}`;
      });

      throw new ValidationException(messages);
    }

    return value;
  }
}
