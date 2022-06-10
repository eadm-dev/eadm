import { Static, Type } from "@sinclair/typebox";
import { FastifySchema } from "fastify";

export const itemHardDelete = Type.Object({
    // 必須
    id: Type.String()
})

export type TItemHardDelete = Static<typeof itemHardDelete>

export const SHardDelete: FastifySchema = {
  body: Type.Strict(itemHardDelete)
}
