# ✍️ create

> To use the functions provided under this category, implement them as follows:

```typescript
import { create } from 'datenow-ts'
```

These are the functions you have at your disposal after implementing.

| command                  | params                                                                  |
|--------------------------|-------------------------------------------------------------------------|
| ``dateNow()``            | -                                                                       |
| ``dateByParams()``       | z.B. `{year: 2023, month: 1, day: 1, hours: 1, minutes: 1, seconds: 1}` |
| ``dateByMilliseconds()`` | 1 / number / milliseconds from 1.1.1970                                 |
| ``dateByDatestring()``   | z.B. `2021/03/05`                                                       |

All functions under this category return a datestring in the following format:

``Sun Jan 01 2023 01:01:01 GMT+0100 (Mitteleuropäische Normalzeit)``

### Example

```typescript
import { create } from 'datenow-ts'
const date = create.dateByParams({ year: 2023, month: 1, day: 1 })
console.log(date)
```
