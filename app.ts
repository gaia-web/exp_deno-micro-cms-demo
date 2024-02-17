import { startApp } from "https://raw.githubusercontent.com/gaia-web/exp_deno-micro-cms/5b57ceff56af1dbfcd2af5ac03bd7290a42692c6/mod.ts";

startApp({
  OPENAPI_FILE_PATH: "./openapi.json",
  FRONTENDS:
    `/,./www/main,./index.html,./index.html:/admin,./www/admin,./index.html,./index.html:/swagger,./www/swagger,./index.html,./index.html`,
});
