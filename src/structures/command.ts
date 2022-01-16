import { CommandType } from "../interfaces";

export class Command {
  constructor(commandOptions: CommandType) {
    Object.assign(this, commandOptions);
  }
}
