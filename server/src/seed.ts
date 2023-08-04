import { Call } from "./models/call";
import { callData } from "./callData";

async function clear() {
  await Call.destroy({ where: {} });
}
async function seed() {
  await clear();
  for (const call of callData) {
    await Call.create(call)
  }
}

seed().then(() => {
  console.log("Database seeded");
  process.exit();
})