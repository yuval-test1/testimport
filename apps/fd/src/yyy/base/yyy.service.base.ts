/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Yyy } from "@prisma/client";

export class YyyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.YyyCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.YyyCountArgs>
  ): Promise<number> {
    return this.prisma.yyy.count(args);
  }

  async findMany<T extends Prisma.YyyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.YyyFindManyArgs>
  ): Promise<Yyy[]> {
    return this.prisma.yyy.findMany(args);
  }
  async findOne<T extends Prisma.YyyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.YyyFindUniqueArgs>
  ): Promise<Yyy | null> {
    return this.prisma.yyy.findUnique(args);
  }
  async create<T extends Prisma.YyyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.YyyCreateArgs>
  ): Promise<Yyy> {
    return this.prisma.yyy.create<T>(args);
  }
  async update<T extends Prisma.YyyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.YyyUpdateArgs>
  ): Promise<Yyy> {
    return this.prisma.yyy.update<T>(args);
  }
  async delete<T extends Prisma.YyyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.YyyDeleteArgs>
  ): Promise<Yyy> {
    return this.prisma.yyy.delete(args);
  }
}
