import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption, SlashGroup } from "discordx";


@Discord()
export abstract class AppDiscord {
  @Slash("echo")
  @SlashGroup("tests")
  add(
    @SlashOption("msg", { description: "The message you want the bot to repeat" })
    msg: string,
    interaction: CommandInteraction
  ) {
    interaction.reply(`let me hit you back with: ${msg}`);
  }

}
