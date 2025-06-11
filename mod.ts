
/*
 * a simple yaml reader, based on deno standard library.
 *
 * basic usage : 
 * @example
 * import { dallmo_util_yaml } from "jsr:@dallmo/util-yaml";
 * 
 * const config_file = "config.yaml";
 * const config_obj = await dallmo_util_yaml( config_file );
 * 
 * console.log( config_obj );
 *
 */

// this file is the common entry point
// re-export all related functions here
export * from "./app.ts";

