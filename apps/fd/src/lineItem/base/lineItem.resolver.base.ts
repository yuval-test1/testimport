/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateLineItemArgs } from "./CreateLineItemArgs";
import { UpdateLineItemArgs } from "./UpdateLineItemArgs";
import { DeleteLineItemArgs } from "./DeleteLineItemArgs";
import { LineItemCountArgs } from "./LineItemCountArgs";
import { LineItemFindManyArgs } from "./LineItemFindManyArgs";
import { LineItemFindUniqueArgs } from "./LineItemFindUniqueArgs";
import { LineItem } from "./LineItem";
import { Bid } from "../../bid/base/Bid";
import { LineItemService } from "../lineItem.service";
@graphql.Resolver(() => LineItem)
export class LineItemResolverBase {
  constructor(protected readonly service: LineItemService) {}

  async _lineItemsMeta(
    @graphql.Args() args: LineItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LineItem])
  async lineItems(
    @graphql.Args() args: LineItemFindManyArgs
  ): Promise<LineItem[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => LineItem, { nullable: true })
  async lineItem(
    @graphql.Args() args: LineItemFindUniqueArgs
  ): Promise<LineItem | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LineItem)
  async createLineItem(
    @graphql.Args() args: CreateLineItemArgs
  ): Promise<LineItem> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        bid: {
          connect: args.data.bid,
        },
      },
    });
  }

  @graphql.Mutation(() => LineItem)
  async updateLineItem(
    @graphql.Args() args: UpdateLineItemArgs
  ): Promise<LineItem | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          bid: {
            connect: args.data.bid,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LineItem)
  async deleteLineItem(
    @graphql.Args() args: DeleteLineItemArgs
  ): Promise<LineItem | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Bid, {
    nullable: true,
    name: "bid",
  })
  async resolveFieldBid(
    @graphql.Parent() parent: LineItem
  ): Promise<Bid | null> {
    const result = await this.service.getBid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
