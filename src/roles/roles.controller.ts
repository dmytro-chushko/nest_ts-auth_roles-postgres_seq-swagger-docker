import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";

enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}

@ApiTags("Roles")
@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: "Role creation" })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: "Receiving role by value" })
  @ApiResponse({ status: 200, type: [Role] })
  @Get("/:value")
  getByValue(@Param("value") value: ROLE) {
    return this.roleService.getRoleByValue(value);
  }
}
