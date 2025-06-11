
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// the main yaml parse module from deno standard library
export { 
  
  parse as yaml_parse 

} from "jsr:@std/yaml";
////////////////////////////////////////////////////////////////////////////////
// for testing
export { 

  assertEquals 

} from "jsr:@std/assert";
////////////////////////////////////////////////////////////////////////////////

