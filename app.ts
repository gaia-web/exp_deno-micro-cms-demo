import { setupApp } from "https://raw.githubusercontent.com/SeanWong24/exp_deno-micro-cms/491350087cc0bb0eca78c6c2c0e301c49c23f699/mod.ts";

const app = await setupApp({
  OPENAPI_FILE_PATH: "./openapi.json",
  FRONTENDS:
    `/admin,./www/admin,./index.html,./index.html:/swagger,./www/swagger,./index.html,./index.html:,./www/main,./index.html,./index.html`,
});

export default { fetch: app.fetch };
