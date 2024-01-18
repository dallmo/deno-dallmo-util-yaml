
import { yaml_parse } from "./deps.ts";

////////////////////////////////////////////////////////////////////////////////
/*
 * 
 * a simple yaml reader based on deno standard library.
 *
 * @function dallmo_yaml
 * @param {string} config_file - path and filename to the yaml file to read
 * @returns {Object} - return the result in the form of json object
 */
async function dallmo_util_yaml( config_file: string ){
  
  // read file content from config file
  const file_content: string = await Deno.readTextFile( config_file );

  // parse the yaml file content as json
  const config_obj: any = await yaml_parse( file_content );

    return config_obj;

}; // function dallmo_yaml
////////////////////////////////////////////////////////////////////////////////
/*
 * @function test
 * @params {undefined} - no inputs required
 * @returns {string}
 */
function test(): string{

  return "ok";

}// function test
////////////////////////////////////////////////////////////////////////////////
export {
 
  test, 
  dallmo_util_yaml

}; // export

