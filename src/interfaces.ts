import {
  ApplicationCommandDataResolvable,
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  GuildMember,
  PermissionResolvable
} from "discord.js";
import { ExtendedClient } from "./structures/client";

interface RunOptions {
  client: ExtendedClient,
  interaction: CommandInteraction,
  args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOptions) => any

export type CommandType = {
  userPermissions?: PermissionResolvable[];
  cooldown?: number;
  run: RunFunction

} & ChatInputApplicationCommandData


//INFO: client 

export interface RegisterCommandsOptions {
  guildId?: string
  commands: ApplicationCommandDataResolvable[]
}

//INFO: commands

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember;
}


