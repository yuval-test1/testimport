/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RoofingMaterialService } from "../roofingMaterial.service";
import { RoofingMaterialCreateInput } from "./RoofingMaterialCreateInput";
import { RoofingMaterialWhereInput } from "./RoofingMaterialWhereInput";
import { RoofingMaterialWhereUniqueInput } from "./RoofingMaterialWhereUniqueInput";
import { RoofingMaterialFindManyArgs } from "./RoofingMaterialFindManyArgs";
import { RoofingMaterialUpdateInput } from "./RoofingMaterialUpdateInput";
import { RoofingMaterial } from "./RoofingMaterial";
import { ColorFindManyArgs } from "../../color/base/ColorFindManyArgs";
import { Color } from "../../color/base/Color";
import { ColorWhereUniqueInput } from "../../color/base/ColorWhereUniqueInput";

export class RoofingMaterialControllerBase {
  constructor(protected readonly service: RoofingMaterialService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RoofingMaterial })
  async create(
    @common.Body() data: RoofingMaterialCreateInput
  ): Promise<RoofingMaterial> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        createdAt: true,
        description: true,
        manufacturer: true,
        maxLifespan: true,
        minLifespan: true,
        name: true,
        status: true,
        supplier: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RoofingMaterial] })
  @ApiNestedQuery(RoofingMaterialFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<RoofingMaterial[]> {
    const args = plainToClass(RoofingMaterialFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        description: true,
        manufacturer: true,
        maxLifespan: true,
        minLifespan: true,
        name: true,
        status: true,
        supplier: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RoofingMaterial })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: RoofingMaterialWhereUniqueInput
  ): Promise<RoofingMaterial | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        description: true,
        manufacturer: true,
        maxLifespan: true,
        minLifespan: true,
        name: true,
        status: true,
        supplier: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RoofingMaterial })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: RoofingMaterialWhereUniqueInput,
    @common.Body() data: RoofingMaterialUpdateInput
  ): Promise<RoofingMaterial | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          description: true,
          manufacturer: true,
          maxLifespan: true,
          minLifespan: true,
          name: true,
          status: true,
          supplier: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RoofingMaterial })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: RoofingMaterialWhereUniqueInput
  ): Promise<RoofingMaterial | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          description: true,
          manufacturer: true,
          maxLifespan: true,
          minLifespan: true,
          name: true,
          status: true,
          supplier: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/colors")
  @ApiNestedQuery(ColorFindManyArgs)
  async findManyColors(
    @common.Req() request: Request,
    @common.Param() params: RoofingMaterialWhereUniqueInput
  ): Promise<Color[]> {
    const query = plainToClass(ColorFindManyArgs, request.query);
    const results = await this.service.findColors(params.id, {
      ...query,
      select: {
        id: true,

        roofingMaterial: {
          select: {
            id: true,
          },
        },

        color: true,
        createdAt: true,
        pictureUrl: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/colors")
  async connectColors(
    @common.Param() params: RoofingMaterialWhereUniqueInput,
    @common.Body() body: ColorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      colors: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/colors")
  async updateColors(
    @common.Param() params: RoofingMaterialWhereUniqueInput,
    @common.Body() body: ColorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      colors: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/colors")
  async disconnectColors(
    @common.Param() params: RoofingMaterialWhereUniqueInput,
    @common.Body() body: ColorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      colors: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
