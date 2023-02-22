# 🎭 modify

::: tip USECASE
Functions under this category allow you to modify dates. 
This means adding someting to a date, subtract someting from a date 
or modify the date entierly flexible.
:::

To use the functions provided under this category, implement them as follows:

```typescript
import { modify } from 'datenow-ts'
```

In this modify function group, you have the same functionalities for every unit.
All existing units are:

- year
- month
- day
- hour
- minute
- second

And these are the three commands, that exist for every unit:

### add()
> Add the chosen unit x times to a date. 

- **Parameters**: `date: Date, numberOfX: number`
- **Type Return**: `Date`

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(modify.year.add(date, 20));
// -> returns date twenty years in the future
```

### subtract()
> Subtract the chosen unit x times from a date.

- **Parameters**: `date: Date, numberOfX: number`
- **Type Return**: `Date`

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(modify.year.subtract(date, 10));
// -> returns date ten years earlier
```

### changeTo()
> Change a chosen unit to a self defined value.

- **Parameters**: `date: Date, unit: depending on unit`
- **Type Return**: `Date`

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(modify.year.changeTo(date, 2050));
// -> returns the same date but in the year 2050
```
