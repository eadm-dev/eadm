import { Static, Type } from "@sinclair/typebox";

export const itemHardDelete = Type.Object({
    // 必須
    id: Type.String()
})

export type TItemHardDelete = Static<typeof itemHardDelete>
