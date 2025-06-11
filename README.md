# @dallmo/util-yaml

# overview

- a simple yaml file reader ; 
- re-written in typescript, migrated from nodejs to base only on deno standard libraries ; 
- published on [jsr][link-2] ( no further updates will be made for the version on [deno land][link-1] ); 


# dependencies

all of deno standard library.

- `Deno.readTextFile`
- https://jsr.io/@std/yaml


# usage

1. create 2 files :
-  `test-via-jsr.ts` ; 
-  `config.yaml` ; ( sample test files [can be found inside `test/`][link-3] )

content of `test-via-jsr.ts`:
```
import { dallmo_util_yaml } from "jsr:@dallmo/util-yaml";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );
```

2. run the test file
```
deno run --allow-read test-via-jsr.ts
```


# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test the local files : 
  - run `deno task test` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 


## notes on "import / deno add"
in the sample code above, the module is imported via :
```
import { [method name] } from "jsr:@[module name]";
```

in case the import is done with this instead : 
```
import { [method name] } from "@[module name]";
```

i.e. without the "jsr:" prefix, then the module has to be added with this command in CLI :
```
deno add jsr:@[module name]
```

if the module has been manually added in the CLI, import with the "jsr:" prefix inside the app is also ok.

updates have therefore been made to add the "jsr:" prefix to both the sample codes above and the test file `test-via-jsr.ts` for simple copy-n-paste.


[comments]: --------------------------------------------------
[link-1]: https://deno.land/x/dallmo_util_yaml
[link-2]: https://jsr.io/@dallmo/util-yaml
[link-3]: https://github.com/dallmo/deno-dallmo-util-yaml/blob/main/test/config.yaml


# updates
## 2025-06-11
- remove custom steps in github workflow which make changes to etc/deps.ts ;
- archived deno.land related files and focus only on jsr ; 
- add notes above on the usage of "jsr:" prefix ; 
