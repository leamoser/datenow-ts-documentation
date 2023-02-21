# 👯 compare

> To use the functions provided under this category, implement them as follows:


```typescript
import { compare } from 'datenow-ts'
```

Functions under this category compare two dates with each otgher and return
a boolean value if a condition meets. The following conditions can be compared:

| Function                                    | Checks if the two dates have...        |
|---------------------------------------------|----------------------------------------|
| ``isSameYear``(dateFirst, dateSecond)       | ... the same year                      |
| ``isSameExactMonth``(dateFirst, dateSecond) | ... the same year and month            |
| ``isSameMonth``(dateFirst, dateSecond)      | ... the same month                     |
| ``isSameExactDay``(dateFirst, dateSecond)   | ... the same year, month and day       |
| ``isSameDay``(dateFirst, dateSecond)        | ... the same day                       |
| ``isSameExactTime``(dateFirst, dateSecond)  | ... the same year, month, day and time |
| ``isSameTime``(dateFirst, dateSecond)       | ... the same time                      |


This example shows how to use these functions:

```typescript
import { create, compare } from 'datenow-ts'
const dateFirst = create.dateByDatestring('2023-01-05')
const dateSecond = create.dateByDatestring('2022-01-10')

console.log(compare.isSameMonth(dateFirst, dateSecond))
// -> returns true, as the two months are the same
```

The second parameter is optional.
If no parameter is passed, the first date will be compared to
the current date and time.
