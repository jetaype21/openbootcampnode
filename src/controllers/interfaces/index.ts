import { GoodByeResponse } from "../types";

export interface IGoodBye {
  getMessage(name?: string, date?: string): Promise<GoodByeResponse>;
}