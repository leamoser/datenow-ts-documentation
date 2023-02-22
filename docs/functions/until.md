# 👵 until

::: tip USECASE
Functions under this group return the time between two dates.
:::

To use the functions provided under this category, implement them as follows:

```typescript
import { until } from 'datenow-ts'
```

You have six functions at your displosal in this section.
They all take two datestrings as parameters.
The first one is the start date, the second one the end date.

To calculate the number of years between two days, this is your way to go:

```javascript
const from = create.dateNow()
const to = create.dateByDatestring('2053-04-07')
console.log('years beween:', until.years(from, to))
// -> returns 30 (typeof number)
```

The exactly same syntax can be used with all the following units:

- `years`
- `days`
- `hours`
- `minutes`
- `seconds`
- `complete` ➡️ This returns an object with all units combined.

