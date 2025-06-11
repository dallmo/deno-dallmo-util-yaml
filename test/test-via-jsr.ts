
// adding module via CLI is optional with the "jsr:" import prefix
import { dallmo_util_yaml } from "jsr:@dallmo/util-yaml";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );
