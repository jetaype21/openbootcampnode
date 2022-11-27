import { logInfo } from "../utils/logger";
import { IGoodBye } from "./interfaces";
import { GoodByeResponse } from "./types";

export class GoodByeController implements IGoodBye {
  public async getMessage(name?: string, date?: string): Promise<GoodByeResponse> {
    logInfo(`${name}`);

    return {
      message: `${name || "anonimo"}`,
      date: `${date}`
    }
  }
}
