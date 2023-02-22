# 🎰 format

::: tip USECASE
With functions under this group, you can format and return dates
in many different ways, just as you may need them.
:::

To use the functions provided under this category, implement them as follows:

```typescript
import { format } from 'datenow-ts'
```

You have four different formatting-functions at your disposal after implementing the functions group.

::: warning IMPORTANT
The parameter you pass to all these functions is of the type Date (ideally created by a function from the `create` section).
Some functions also accept a language ISO-Code as a second parameter.
:::

### toIso()
> Returns a date passed to this function as an ISO standard formatted date.

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(format.toIso(date));
// -> Returns 2022-01-20T00:00:00.000Z
```

### toMilliseconds()
> Returns the Milliseconds passed between the passed date and January first 1970.

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(format.toMilliseconds(date));
// -> Returns 1642636800000 (typeof number)
```

### toTime()
> With this command, you can format a time completly to your wishes.

As a first parameter, for this function you pass a wished format.
Reserved letters will be parsed, everything else will act as a seperator.

**Reserved Letters**
- ``H`` Hours
- ``i`` Minutes
- ``s`` Seconds
- ``v`` Milliseconds

```typescript
const date = create.dateNow()
console.log(format.toTime('H:i', date))
// -> Returns '12:23'
```

### toDate()
> With this command, you can format a date completly to your wishes.

As a first parameter, for this function you pass a wished format.
Reserved letters will be parsed, everything else will act as a seperator.

::: warning TRANSLATABLE
This function accepts an optional language ISO-Code as a third Parameter.
:::

*Reserved letters*
- ``Y`` Year long
- ``y`` Year short
- ``F`` Month long
- ``M`` Month short
- ``m`` Month number
- ``d`` Day
- ``D`` Weekday short
- ``l`` Weekday long

```typescript
const date = create.dateNow()
console.log(format.toDate('F Y', date, 'de'))
// -> Returns 'Februar 2023'
```
