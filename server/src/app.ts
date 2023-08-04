import express from "express";
import activitiesRouter from "./routes/activities";
import { sequelize } from "./models/call";
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/activities", activitiesRouter);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});

export default app;
