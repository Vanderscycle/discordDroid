declare global {
  namespace NodeJs {
    interface ProcessEnv {
      botToken: string;
      guildId: string;
      environment: "dev" | "prod";
    }
  }
}

export { }
