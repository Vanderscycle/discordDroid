import { ExtendedClient } from "./structures/client";

require("dotenv").config();
export const client = new ExtendedClient();

client.start();
