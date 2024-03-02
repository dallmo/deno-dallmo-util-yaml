# @dallmo/util-yaml

# overview

- a simple yaml file reader ; 
- re-written in typescript, migrated from nodejs to base only on deno standard libraries ; 
- published on both [deno land][link-1] and [jsr][link-2] ; 

# dependencies

all of deno standard library.

- `Deno.readTextFile`
- https://deno.land/std/yaml


# usage

## 1. running on deno, import via deno module

1. nothing to add via CLI.

2. create 2 files :
-  `test-via-deno-modules.ts` ; 
-  `config.yaml` ; ( sample test files can be found inside `test/` )

```
// this assumes the latest version
import { dallmo_util_yaml } from "https://deno.land/x/dallmo_util_yaml/mod.ts";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );
```

3. run the test file
```
deno run --allow-read test-via-deno-modules.ts
```

## 2. running on deno, import via jsr

1. in CLI, add the module with :
```
deno add @dallmo/util-yaml
```

2. create 2 files :
-  `test-via-jsr.ts` ; 
-  `config.yaml` ; ( sample test files can be found inside `test/` )

```
import { dallmo_util_yaml } from "@dallmo/util-yaml";

const config_file = "config.yaml";
const config_obj = await dallmo_util_yaml( config_file );
  console.log( config_obj );
```

3. run the test file
```
deno run --allow-read test-via-jsr.ts
```


## test
to run test codes : 

1. switch to the project root folder, i.e. `[root]/` ;
1. to test with deno modules
  - run `deno task test-deno` ;
1. to test with jsr
   - run `deno task test-jsr` ; 


[comments]: --------------------------------------------------
[link-1]: https://deno.land/x/dallmo_util_yaml
[link-2]: https://jsr.io/@dallmo/util-yaml

