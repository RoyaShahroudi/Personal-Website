import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log("1: ", newMessage);
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://roya4sh:RahRahDream@cluster0.q4lmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    console.log("2: ", newMessage);

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      res.status(500).json({ message: "Storng message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
