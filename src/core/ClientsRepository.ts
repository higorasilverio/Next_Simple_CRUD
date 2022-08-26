import Client from "./Client";

export default interface ClientsRepository {
  findAll(): Promise<Client[]>;

  save(client: Client): Promise<void>;

  update(client: Client): Promise<void>;

  delete(client: Client): Promise<void>;
}
