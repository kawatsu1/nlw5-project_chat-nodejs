import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

@EntityRepository()
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository };
