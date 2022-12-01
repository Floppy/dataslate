
Proper readme to come...

## Requirements

* NodeJS, version specified in package.json
* Yarn

### Recommended

* [nodenv](https://github.com/nodenv/nodenv)
* [nodenv-package-json-engine](https://github.com/nodenv/nodenv-package-json-engine)

## Extracting abilities from Battlescribe catalogue

```
xml sel -t -v "//*[@name='Description' or @name='Ability' or @name='Abilities']//text()" ../../BSData/wh40k-killteam/*.cat | tr '[:upper:]' '[:lower:]' | sed "s/\"/\"\"/g" | sed "s/^[ -]*//g;s/[^[[:alpha:]]]*$//g" | sed "s/^/\"/g" | sed "s/$/\",/g" | sort | uniq > abilities_new.csv
```

## Rules

```
xml sel -N x="http://www.battlescribe.net/schema/catalogueSchema" -t -v "//x:rules/x:rule/x:description/text()" ../../BSData/wh40k-killteam/*.cat | tr '[:upper:]' '[:lower:]' | sed "s/\"/\"\"/g" > rules.csv
```
