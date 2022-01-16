import { Client, Intents } from "discord.js";
import dotenv from 'dotenv'
import { Koa } from "@discordx/koa";

export const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
  ],
});



client.on("ready", async () => {
  await client.guilds.fetch();
  console.log("🚀 Bot started");
});

async function main() {
  dotenv.config()
  await client.login(process.env.BOT_TOKEN ?? "");
  const server = new Koa();
  await server.build();
  const port = process.env.PORT ?? 4010;

  server.listen(port, () => {
    console.log(`🚀 discord api server started on ${port}`);
    console.log(`visit localhost:${port}/guilds`);
  });

}
main()
