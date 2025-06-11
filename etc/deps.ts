
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 * version contraints are required when publishing to jsr
 */

////////////////////////////////////////////////////////////////////////
// the main yaml parse module from deno standard library
export { 
  
  parse as yaml_parse 

} from "jsr:@std/yaml@^1.0.7";
////////////////////////////////////////////////////////////////////////
// for testing
export { 

  assertEquals 

} from "jsr:@std/assert@^1.0.13";
////////////////////////////////////////////////////////////////////////
