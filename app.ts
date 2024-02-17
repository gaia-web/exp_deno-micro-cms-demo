import { startApp } from "https://raw.githubusercontent.com/gaia-web/exp_deno-micro-cms/995f5afda965ab6f07ad230433717bd0c85cc1b5/mod.ts";

startApp({
  OPENAPI_FILE_PATH: "./openapi.json",
  FRONTENDS:
    `/,./www/main,./index.html,./index.html:/admin,./www/admin,./index.html,./index.html:/swagger,./www/swagger,./index.html,./index.html`,
});
