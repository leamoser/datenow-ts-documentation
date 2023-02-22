# 🪢 span

::: tip USECASE
Functions under this group return, depending on the function choosen, years or months between two dates.
:::

To use the functions provided under this category, implement them as follows:

```typescript
import { span } from 'datenow-ts'
```

::: danger IMPORTANT
The parameter dateFrom has to be before dateFrom, otherwise the function will not work.
:::

### years()
> Returns an array with all years lying between two dates.

- **Parameters**: `dateFrom: Date, dateFrom: Date`
- **Type Return**: `Year[]`

```typescript
const from = create.dateByDatestring('2023-01-01')
const to = create.dateByDatestring('2028-01-01')
console.log(span.years(from, to))
// -> returns [ 2023, 2024, 2025, 2026, 2027, 2028 ]
```

### months()
> Returns an array with all months bying between two dates.

- **Parameters**: `dateFrom: Date, dateFrom: Date`
- **Type Return**: `YearMonthObject[]`

::: warning TRANSLATABLE
This function accepts an optional language ISO-Code as a second Parameter.
:::

```javascript
const from = create.dateByDatestring('2023-10-01')
const to = create.dateByDatestring('2024-02-01')
console.log(span.months(from, to))
```

::: details Example Return
Months between two dates
```typescript
[
    {
        index: 9,
        number: 10,
        paddedNumber: '10',
        short: 'Oct',
        long: 'October',
        year: 2023
    },
    {
        index: 10,
        number: 11,
        paddedNumber: '11',
        short: 'Nov',
        long: 'November',
        year: 2023
    },
    {
        index: 11,
        number: 12,
        paddedNumber: '12',
        short: 'Dec',
        long: 'December',
        year: 2023
    },
    {
        index: 0,
        number: 1,
        paddedNumber: '01',
        short: 'Jan',
        long: 'January',
        year: 2024
    },
    {
        index: 1,
        number: 2,
        paddedNumber: '02',
        short: 'Feb',
        long: 'February',
        year: 2024
    }
]
```
:::
