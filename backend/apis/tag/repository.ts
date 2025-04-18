import { Result } from "@badrap/result";
import { prisma } from "../prismaClient";
import { InternalError, NotFoundError } from "../types";
import { CreateTag, GetTags , GetTag, Tag, DeleteTag, UpdateTag } from "./types";

const PRODUCT_KEY_PREFIX = "product";
const PRODUCT_IDS_SET_KEY = "productIds";
const PRODUCT_ID_COUNTER_KEY = "product:nextId";

export const tagRepository = {
    async create(tag: CreateTag): Promise<Result<Product>> {
        prisma.tag.create({
            data: {
                tag: tag.tag,
                color: tag.color
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    }
}
