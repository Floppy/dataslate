
Proper readme to come...

## Extracting abilities from Battlescribe catalogue

```
xml sel -t -v "//*[@name='Description' or @name='Ability' or @name='Abilities']//text()" ../../BSData/wh40k-killteam/*.cat | tr '[:upper:]' '[:lower:]' | sed "s/\"/\"\"/g" | sed "s/^[ -]*//g;s/[^[[:alpha:]]]*$//g" | sed "s/^/\"/g" | sed "s/$/\",/g" | sort | uniq > abilities_new.csv
```
