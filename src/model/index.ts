import { AppDataSource } from "../data-source";
import { Item } from "../entities/item";

export const Items = AppDataSource.getRepository(Item)
