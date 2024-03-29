
/**
 * --------------------------
 * for jsr modules
 * --------------------------
 * this file will be symlinked / copied as deps.ts when publishing to 
 * jsr, which does not allow importing modules from deno.land/x via http.
 * 
 * keep all imports / dependencies here for centralized management
 * all other imports in this module should only point to here
 * 
 */

////////////////////////////////////////////////////////////////////////////////
// the main yaml parse module from deno standard library
export { 
  
  parse as yaml_parse 

} from "jsr:@std/yaml@^0.218.2";
////////////////////////////////////////////////////////////////////////////////
// for testing
export { 

  assertEquals 

} from "jsr:@std/assert@^0.218.2";
////////////////////////////////////////////////////////////////////////////////

