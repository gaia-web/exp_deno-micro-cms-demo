import { startApp } from "https://raw.githubusercontent.com/SeanWong24/exp_deno-micro-cms/5b57ceff56af1dbfcd2af5ac03bd7290a42692c6/mod.ts";

startApp({
  OPENAPI_FILE_PATH: "./openapi.json",
  FRONTENDS:
    `/admin,./www/admin,./index.html,./index.html:/swagger,./www/swagger,./index.html,./index.html:,./www/main,./index.html,./index.html`,
});
