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

1. in CLI, add the module with :
```
deno add jsr:@dallmo/util-yaml
```

2. create 2 files :
-  `test-via-jsr.ts` ; 
-  `config.yaml` ; ( sample test files [can be found inside `test/`][link-3] )

```
import { dallmo_util_yaml } from "jsr:@dallmo/util-yaml";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );
```

3. run the test file
```
deno run --allow-read test-via-jsr.ts
```

## NOTE : 2025-06-11 updates
step 1 above is optional if the import is done via :
```
import { dallmo_util_yaml } from "jsr:@dallmo/util-yaml";
```

i.e. if the import line reads like this : 
```
import { dallmo_util_yaml } from "@dallmo/util-yaml";
```
then step 1 above is required.


but it seems, with the "jsr:" suffix, whether the module has been added via CLI ( i.e. step 1 ) or not makes no difference.

So updates have been made to add the "jsr:" prefix to both the sample codes above and the test file `test-via-jsr.ts` for simple copy-n-paste and play safe.


# test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
2. run deno task scripts :
- to test the local files : 
  - run `deno task test` ;
- to test with dependencies via jsr : 
  - run `deno task test-jsr` ; 


[comments]: --------------------------------------------------
[link-1]: https://deno.land/x/dallmo_util_yaml
[link-2]: https://jsr.io/@dallmo/util-yaml
[link-3]: https://github.com/dallmo/deno-dallmo-util-yaml/blob/main/test/config.yaml


# updates
## 2025-06-11
- custom steps in github workflow to make changes to etc/deps.ts removed ;
- archived deno.land related files and focus only on jsr ; 
- add remarks above on the usage of "jsr:" prefix ; 
