import { FastifyRequest } from "fastify";
import { Items } from "../../../model";
import { TItemCreate } from "../../../types/item-create";

/**
 * item作成
 */
 export default async function(request: FastifyRequest<{ Body: TItemCreate }>) {
  return await Items.insert({
    // 必須
    prefix: request.body.prefix,
    itemId: request.body.itemId,
    // オプション
    genre: request.body.genre,
    type: request.body.type,
    maker: request.body.maker,
    name: request.body.name,
    serial: request.body.serial,
    model: request.body.model,
  })
}
