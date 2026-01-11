import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const runGetStarted = async () => {
  const uri =
    "mongodb+srv://romanovkirill_db_user:YVc4D8qGC5iN1y51@cluster0.jlk4fyd.mongodb.net/?appName=Cluster0";
  const instance = new MongoClient(uri, { monitorCommands: true });

  try {
    const client = await instance.connect();
    const database = client.db("sample_mflix");
    const tasks = database.collection("tasks");

    app.get("/todo", async (req, res) => {
      const taskEntityList = (await tasks.find({}).toArray()).map((task) => ({
        id: task._id,
        description: task.description,
        checked: task.checked,
      }));
      res.send(taskEntityList);
    });

    app.post("/todo", async (req, res) => {
      const taskModel = req.body;
      const taskEntity = await tasks.insertOne(taskModel);
      res.send({
        id: taskEntity.insertedId,
        checked: taskModel.checked,
        description: taskModel.description,
      });
    });

    app.patch("/todo/:id", async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDocument = {
        $set: data,
      };
      await tasks.updateOne(filter, updateDocument);
      const doc = await tasks.findOne({ _id: new ObjectId(id) });
      res.send({
        id: doc._id,
        description: doc.description,
        checked: doc.checked,
      });
    });
    app.delete("/todo/:id", async (req, res) => {
      const { id } = req.params;
      const taskEntity = await tasks.deleteOne({ _id: new ObjectId(id) });
      res.send(taskEntity);
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};
runGetStarted().catch(console.dir);
