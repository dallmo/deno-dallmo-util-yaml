// this assumes the latest version
import { dallmo_util_yaml } from "https://deno.land/x/dallmo_util_yaml/mod.ts";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );

