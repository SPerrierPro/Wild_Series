import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

class ProgramRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from program");

    return rows;
  }
}

export default new ProgramRepository();
