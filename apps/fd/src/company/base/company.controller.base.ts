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
import { CompanyService } from "../company.service";
import { CompanyCreateInput } from "./CompanyCreateInput";
import { CompanyWhereInput } from "./CompanyWhereInput";
import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";
import { CompanyFindManyArgs } from "./CompanyFindManyArgs";
import { CompanyUpdateInput } from "./CompanyUpdateInput";
import { Company } from "./Company";
import { OfficeLocationFindManyArgs } from "../../officeLocation/base/OfficeLocationFindManyArgs";
import { OfficeLocation } from "../../officeLocation/base/OfficeLocation";
import { OfficeLocationWhereUniqueInput } from "../../officeLocation/base/OfficeLocationWhereUniqueInput";

export class CompanyControllerBase {
  constructor(protected readonly service: CompanyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Company })
  async create(@common.Body() data: CompanyCreateInput): Promise<Company> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        city: true,
        country: true,
        createdAt: true,
        description: true,
        email: true,
        foundingYear: true,
        logo: true,
        logoStatus: true,
        name: true,
        phoneNumber: true,
        state: true,
        status: true,
        street1: true,
        street2: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Company] })
  @ApiNestedQuery(CompanyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Company[]> {
    const args = plainToClass(CompanyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        city: true,
        country: true,
        createdAt: true,
        description: true,
        email: true,
        foundingYear: true,
        logo: true,
        logoStatus: true,
        name: true,
        phoneNumber: true,
        state: true,
        status: true,
        street1: true,
        street2: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        city: true,
        country: true,
        createdAt: true,
        description: true,
        email: true,
        foundingYear: true,
        logo: true,
        logoStatus: true,
        name: true,
        phoneNumber: true,
        state: true,
        status: true,
        street1: true,
        street2: true,
        updatedAt: true,
        zipCode: true,
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
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() data: CompanyUpdateInput
  ): Promise<Company | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          city: true,
          country: true,
          createdAt: true,
          description: true,
          email: true,
          foundingYear: true,
          logo: true,
          logoStatus: true,
          name: true,
          phoneNumber: true,
          state: true,
          status: true,
          street1: true,
          street2: true,
          updatedAt: true,
          zipCode: true,
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
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          city: true,
          country: true,
          createdAt: true,
          description: true,
          email: true,
          foundingYear: true,
          logo: true,
          logoStatus: true,
          name: true,
          phoneNumber: true,
          state: true,
          status: true,
          street1: true,
          street2: true,
          updatedAt: true,
          zipCode: true,
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

  @common.Get("/:id/officeLocations")
  @ApiNestedQuery(OfficeLocationFindManyArgs)
  async findManyOfficeLocations(
    @common.Req() request: Request,
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<OfficeLocation[]> {
    const query = plainToClass(OfficeLocationFindManyArgs, request.query);
    const results = await this.service.findOfficeLocations(params.id, {
      ...query,
      select: {
        id: true,
        city: true,

        company: {
          select: {
            id: true,
          },
        },

        country: true,
        createdAt: true,
        description: true,
        email: true,
        foundingYear: true,
        logo: true,
        logoStatus: true,
        name: true,
        phoneNumber: true,
        state: true,
        status: true,
        street1: true,
        street2: true,
        updatedAt: true,
        zipCode: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/officeLocations")
  async connectOfficeLocations(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: OfficeLocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      officeLocations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/officeLocations")
  async updateOfficeLocations(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: OfficeLocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      officeLocations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/officeLocations")
  async disconnectOfficeLocations(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: OfficeLocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      officeLocations: {
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
