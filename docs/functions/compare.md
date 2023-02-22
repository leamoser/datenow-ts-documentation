# 👯 compare

::: tip USECASE
Functions under this group return a boolean value, depending on the contition choosen.
:::

To use the functions provided under this category, implement them as follows:

```typescript
import { compare } from 'datenow-ts'
```

Functions under this category compare two dates with each other and return
a boolean value if a condition meets. The dates can be checked for the following conditions:

| Function                                    | Checks if the two dates have...        |
|---------------------------------------------|----------------------------------------|
| ``isSameYear``(dateFirst, dateSecond)       | ... the same year                      |
| ``isSameExactMonth``(dateFirst, dateSecond) | ... the same year and month            |
| ``isSameMonth``(dateFirst, dateSecond)      | ... the same month                     |
| ``isSameExactDay``(dateFirst, dateSecond)   | ... the same year, month and day       |
| ``isSameDay``(dateFirst, dateSecond)        | ... the same day                       |
| ``isSameExactTime``(dateFirst, dateSecond)  | ... the same year, month, day and time |
| ``isSameTime``(dateFirst, dateSecond)       | ... the same time                      |

- **Parameters**: `dateFrom: Date, dateFrom: Date`
- **Type Return**: `boolean`

::: warning PARAMETERS
The second parameter, dateSecond, is optional. 
If nothing is passed, the first date will be compared to the current timestamp.
:::

**Example 1 Parameter**
```typescript
const date = create.dateByDatestring('2023-01-05')
console.log(compare.isSameYear(date))
// -> returns true, if the current year is 2023
```

**Example 2 Parameters**
```typescript
const dateFirst = create.dateByDatestring('2021-01-05')
const dateSecond = create.dateByDatestring('2022-01-10')
console.log(compare.isSameMonth(dateFirst, dateSecond))
// -> returns true, as the two months are the same
console.log(compare.isSameExactMonth(dateFirst, dateSecond))
// -> returns false, as the months are the same but the year is not
```
