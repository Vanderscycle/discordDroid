import { Command } from "../../structures/command";


export default new Command({
  name: "pong",
  description: "replies with pong",
  run: async ({ interaction }) => {
    interaction.followUp("Ping");
  }
});

