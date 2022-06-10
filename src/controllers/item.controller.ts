import { FastifyReply, FastifyRequest } from "fastify";
import { Controller, GET, POST } from "fastify-decorators";
import { Items } from "../model";
import ItemList from "../api/v1/item/list"
import ItemCreate from "../api/v1/item/create"
import { SHardDelete, TItemHardDelete } from "../types/item-hard-delete";
import { SItemCreate, TItemCreate } from "../types/item-create";


@Controller({ route: "/api/v1/item" })
export default class Index {
  @GET("/list.raw")
  async listRaw(request: FastifyRequest, reply: FastifyReply) {
    reply.type('application/json').code(200)
    return await Items.find()
  }

  @GET("/list")
  async list(request: FastifyRequest, reply: FastifyReply) {
    reply.type('application/json').code(200)
    return await ItemList()
  }

  @POST("create", { schema: SItemCreate })
  async create(request: FastifyRequest<{ Body: TItemCreate }>, reply: FastifyReply) {
    reply.type('application/json').code(204)
    console.log(request.body)
    return await ItemCreate(request)
  }

  // todo: isDeleteがついてるか見てから消す
  @POST("hard-delete", { schema: SHardDelete })
  async hardDelete(request: FastifyRequest<{ Body: TItemHardDelete }>, reply: FastifyReply) {
    reply.type('application/json').code(204)
    console.log(request.body)
    return await Items.delete({id: request.body.id })
  }
}
