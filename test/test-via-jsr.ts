
// must add modules first per the instructions in README

import { dallmo_util_yaml } from "@dallmo/util-yaml";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );

