import fastify, { FastifyInstance } from "fastify";
import path from "node:path";
import { AppDataSource } from "./data-source";
import { Items } from "./model";
import { itemCreate, TItemCreate } from "./types/item-create";
import ItemList from "./api/v1/item/list"
import { TItemHardDelete } from "./types/item-hard-delete";


const app: FastifyInstance = fastify({ logger: true })

// クライアント(static)

app.register(require('@fastify/static'), {
  root: path.join(__dirname, '/../packages/client/dist'),
  prefix: '/', // optional: default '/'
})

console.log(__dirname)

// api

app.get('/api/v1', async (request, reply) => {
    reply.type('application/json').code(200)
    return {hello: 'world'}
})

app.get('/api/v1/item/list.raw', async (request, reply) => {
    reply.type('application/json').code(200)
    return await Items.find()
})

app.get('/api/v1/item/list', async (request, reply) => {
  reply.type('application/json').code(200)
  return await ItemList()
})

app.post<{ Body: TItemHardDelete }>('/api/v1/item/hard-delete', async (request, reply) => {
  reply.type('application/json').code(204)
  console.log(request.body)
  return await Items.delete({id: request.body.id})
})

app.post<{ Body: TItemCreate }>('/api/v1/item/create' , async (request, reply) => {
    reply.type('application/json').code(204)
    console.log(request.body)
    return await Items.save({
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
})

function appStart() {
    app.listen(3000, (err, address) => {
        if (err) throw err
        app.log.info(`server listening on ${address}`)
    })
}

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        appStart()
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
