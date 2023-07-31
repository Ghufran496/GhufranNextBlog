import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, Message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !Message ||
      Message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input..." });

      return;
    }

    //store data in db
    const newMessage = {
      email,
      name,
      Message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.psik2ae.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: "Could not connect to Database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);

      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(201).json({ message: "Storing message failed" });
      return;
    }

    //console.log(newMessage);
    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
