import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  UseFilters,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";
import { HttpExceptionFilter } from "src/exeption/http.exсeption";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  @UseFilters(HttpExceptionFilter)
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>();

    // try {
    const authHeader = req.headers.authorization;
    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({ message: "Unauthorized" });
    }

    this.jwtService.verify(token);

    // req.user = user;

    return true;
    // } catch (e) {
    //   throw new UnauthorizedException({ message: "Unauthorized" });
    // }
  }
}
