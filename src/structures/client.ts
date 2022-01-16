import { ApplicationCommandDataResolvable, Client, Collection } from "discord.js";
import { glob } from "glob";
import { promisify } from "util";
import { CommandType, RegisterCommandsOptions } from "../interfaces";

const globPromise = promisify(glob)

export class ExtendedClient extends Client {
  commands: Collection<string, CommandType> = new Collection()

  constructor() {
    super({ intents: 32767 })
  }
  start() {
    this.registerModules()
    this.login(process.env.botToken)
  }
  async importFile(filePath: string) { return (await import(filePath))?.default }

  async registerCommands({ commands, guildId }: RegisterCommandsOptions) {
    if (guildId) {
      this.guilds.cache.get(guildId)?.commands.set(commands)
      console.log(`Registering commands to ${guildId}`);
    } else {
      this.application?.commands.set(commands);
      console.log("Registering global commands");

    }
  }

  async registerModules() {
    //commands
    let slashCommands: ApplicationCommandDataResolvable[] = []
    //returns an array of file paths
    const commandFiles = await globPromise(`${__dirname}/../commands/*/{.ts,.js}`)
    console.log({ commandFiles })
    commandFiles.forEach(async (filePath) => {
      const command: CommandType = await this.importFile(filePath)
      if (!command.name) { return }
      this.commands.set(command.name, command)
      slashCommands = [...slashCommands, command]
    })
  }
}
