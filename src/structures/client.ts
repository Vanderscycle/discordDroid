import { ApplicationCommandDataResolvable, Client, Collection } from "discord.js";
import { glob } from "glob";
import { promisify } from "util";
import { CommandType } from "../interfaces";

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

  async registerModules() {
    //commands
    const slashCommands: ApplicationCommandDataResolvable[] = []
    //returns an array of file paths
    const commandFiles = await globPromise(`${__dirname}/../commands/*/{.ts,.js}`)
    console.log({ commandFiles })
  }

}
