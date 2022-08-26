import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Client from "../../core/Client";
import ClientsRepository from "../../core/ClientsRepository";
import { db } from "../firebaseConfig";

export class ClientsCollection implements ClientsRepository {
  async findAll(): Promise<Client[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "clients"));

      const clientArray: Client[] = [];

      querySnapshot.forEach((doc) => {
        const id = doc.id;
        const { name, age } = doc.data();

        const client = new Client(name, age, id);

        clientArray.push(client);
      });

      return clientArray;
    } catch (err) {
      throw new Error("Error reading collection: ", err);
    }
  }

  async save(client: Client): Promise<void> {
    try {
      await addDoc(collection(db, "clients"), {
        name: client.name,
        age: client.age,
      });
    } catch (err) {
      throw new Error("Error adding document: ", err);
    }
  }

  async update(client: Client): Promise<void> {
    try {
      await setDoc(doc(db, "clients", client.id), {
        name: client.name,
        age: client.age,
      });
    } catch (err) {
      throw new Error("Error updating document: ", err);
    }
  }

  async delete(client: Client): Promise<void> {
    try {
      await deleteDoc(doc(db, "clients", client.id));
    } catch (err) {
      throw new Error("Error deleting document: ", err);
    }
  }
}
