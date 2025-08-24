import { setupApp } from "https://raw.githubusercontent.com/SeanWong24/exp_deno-micro-cms/2a7518bc05e37acff7765fde38762d4405b279f0/mod.ts";

const app = await setupApp({
  OPENAPI_FILE_PATH: "./openapi.json",
  FRONTENDS:
    `/admin,./www/admin,./index.html,./index.html:/swagger,./www/swagger,./index.html,./index.html:,./www/main,./index.html,./index.html`,
});

export default { fetch: app.fetch };
