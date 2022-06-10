import { Static, Type } from "@sinclair/typebox";

export const itemCreate = Type.Object({
    // 必須
    prefix: Type.String(),
    itemId: Type.Number(),
    // オプション
    genre: Type.Optional(Type.String()),
    type: Type.Optional(Type.String()),
    maker: Type.Optional(Type.String()),
    name: Type.Optional(Type.String()),
    serial: Type.Optional(Type.String()),
    model: Type.Optional(Type.String()),
})

export type TItemCreate = Static<typeof itemCreate>

export const SItemCreate = {
  body: Type.Strict(itemCreate)
}
