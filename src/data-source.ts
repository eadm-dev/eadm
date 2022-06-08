import "reflect-metadata"
import { DataSource } from "typeorm"
import { Item } from "./entities/item"

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "db/eadm.sqlite",
    synchronize: true,
    logging: false,
    entities: [Item],
    migrations: [`${__dirname}/../migrations/*.ts`],
    subscribers: [],
})

/*
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    */
