import { Event } from "../structures/event";

export default new Event("ready", () => {
  console.log("genereated a new event on ready (websocket)");
});
