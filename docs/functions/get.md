# 🤲 get

::: tip USECASE
Functions under this category help you to get parts of an existing date, e.g. the weekday or the year.
:::

To use the functions provided under this category, implement them as follows:

```typescript
import { get } from 'datenow-ts'
```

You have a lot of different functions at your disposal after implenenting the function group.

::: warning IMPORTANT
The parameter you pass to all these functions is of the type Date (ideally created by a function from the `create` section). 
Some functions also accept a language ISO-Code as a second parameter. 
:::

### year()
> Get the full year of a date

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.year(date)) // -> returns 2022
```

### yearObject()
> Get different forms of the year

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.yearObject(date)) 
// -> returns { long: 2022, short: 22 }
```

### monthIndex()
> Get the index of a month (starting with 0)

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.monthIndex(date)) // -> returns 0
```

### monthObject()
> Get different forms of the month

::: warning TRANSLATABLE
This function accepts a language ISO-Code as a second Parameter.
Default is always english ("en").
:::

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.monthObject(date)) 
/* -> returns {
    index: 0,
    number 1,
    paddedNumber: '01',
    short: 'Jan',
    long: 'January'
} */
```

### day()
> Get the day of the date

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.day(date)) // -> returns 1
```

### dayObject()
> Get all different forms of the day

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.dayObject(date)) 
// -> returns { number: 1, paddedNumber: '01' }
```

### weekdayIndex()
> Get the index of the weekday (starting with 0 on Sundays)

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.weekdayIndex(date)) // -> returns 1 (for Monday)
```

### weekdayObject()
> Get different forms of the weekday

::: warning TRANSLATABLE
This function accepts an optional language ISO-Code as a second Parameter.
:::

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.weekdayObject(date)) 
/* -> returns {
    index: 1,
    indexStartingMonday: 0,
    short: 'Mo',
    long: 'Monday'
} */
```

### calendarWeek()
> Returns the calendar week incl. prefix

::: warning PREFIX
This function takes a prefix (string) as the first parameter. 
This could be `week` or anything else. The date is the second parameter.
:::

```typescript
const date = create.dateByDatestring('2022-01-01');
console.log(get.calendarWeek('Week', date)) // -> returns 'Week 1'
```

### hour()
> Returns the hour in 24 hour format (e.g. 14 for 2 PM)

```typescript
const date = create.dateByDatestring('2022-01-01T20:10:50');
console.log(get.hour(date)) // -> returns 20
```

### minute()
> Returns the minute

```typescript
const date = create.dateByDatestring('2022-01-01T20:10:50');
console.log(get.minute(date)) // -> returns 10
```

### second()
> Returns the second

```typescript
const date = create.dateByDatestring('2022-01-01T20:10:50');
console.log(get.second(date)) // -> returns 50
```

### millisecond()
> Returns the millisecond

```typescript
const date = create.dateByDatestring('2022-01-01T20:10:50');
console.log(get.second(date)) // -> returns 0
```

### calendarizedMonth()
> Returns an array with all days of the month the passed date is in.
> Also returns filler-days, so that the first day is a monday (even if in the month before)
> and the last day is a sunday (even if in the month after).

::: warning TRANSLATABLE
This function accepts a language ISO-Code as a second parameter.
:::

```typescript
const date = create.dateByDatestring('2022-01-20');
console.log(get.calendarizedMonth(date))
```

::: details Example Return
Calendarized month January 2022
```typescript
[
    {
        filler: true,
        day: 27,
        paddedDay: '27',
        weekday: { index: 1, indexStartingMonday: 0, short: 'Mon', long: 'Monday' }
    },
    {
        filler: true,
        day: 28,
        paddedDay: '28',
        weekday: { index: 2, indexStartingMonday: 1, short: 'Tue', long: 'Tuesday' }
    },
    {
        filler: true,
        day: 29,
        paddedDay: '29',
        weekday: { index: 3, indexStartingMonday: 2, short: 'Wed', long: 'Wednesday'}
    },
    {
        filler: true,
        day: 30,
        paddedDay: '30',
        weekday: { index: 4, indexStartingMonday: 3, short: 'Thu', long: 'Thursday'}
    },
    {
        filler: true,
        day: 31,
        paddedDay: '31',
        weekday: { index: 5, indexStartingMonday: 4, short: 'Fri', long: 'Friday' }
    },
    {
        filler: false,
        day: 1,
        paddedDay: '01',
        weekday: { index: 6, indexStartingMonday: 5, short: 'Sat', long: 'Saturday'}
    },
    {
        filler: false,
        day: 2,
        paddedDay: '02',
        weekday: { index: 0, indexStartingMonday: 6, short: 'Sun', long: 'Sunday' }
    },
    {
        filler: false,
        day: 3,
        paddedDay: '03',
        weekday: { index: 1, indexStartingMonday: 0, short: 'Mon', long: 'Monday' }
    },
    {
        filler: false,
        day: 4,
        paddedDay: '04',
        weekday: { index: 2, indexStartingMonday: 1, short: 'Tue', long: 'Tuesday' }
    },
    {
        filler: false,
        day: 5,
        paddedDay: '05',
        weekday: { index: 3, indexStartingMonday: 2, short: 'Wed', long: 'Wednesday'}
    },
    {
        filler: false,
        day: 6,
        paddedDay: '06',
        weekday: { index: 4, indexStartingMonday: 3, short: 'Thu', long: 'Thursday'}
    },
    {
        filler: false,
        day: 7,
        paddedDay: '07',
        weekday: { index: 5, indexStartingMonday: 4, short: 'Fri', long: 'Friday' }
    },
    {
        filler: false,
        day: 8,
        paddedDay: '08',
        weekday: { index: 6, indexStartingMonday: 5, short: 'Sat', long: 'Saturday'}
    },
    {
        filler: false,
        day: 9,
        paddedDay: '09',
        weekday: { index: 0, indexStartingMonday: 6, short: 'Sun', long: 'Sunday' }
    },
    {
        filler: false,
        day: 10,
        paddedDay: '10',
        weekday: { index: 1, indexStartingMonday: 0, short: 'Mon', long: 'Monday' }
    },
    {
        filler: false,
        day: 11,
        paddedDay: '11',
        weekday: { index: 2, indexStartingMonday: 1, short: 'Tue', long: 'Tuesday' }
    },
    {
        filler: false,
        day: 12,
        paddedDay: '12',
        weekday: { index: 3, indexStartingMonday: 2, short: 'Wed', long: 'Wednesday'}
    },
    {
        filler: false,
        day: 13,
        paddedDay: '13',
        weekday: { index: 4, indexStartingMonday: 3, short: 'Thu', long: 'Thursday'}
    },
    {
        filler: false,
        day: 14,
        paddedDay: '14',
        weekday: { index: 5, indexStartingMonday: 4, short: 'Fri', long: 'Friday' }
    },
    {
        filler: false,
        day: 15,
        paddedDay: '15',
        weekday: { index: 6, indexStartingMonday: 5, short: 'Sat', long: 'Saturday' }
    },
    {
        filler: false,
        day: 16,
        paddedDay: '16',
        weekday: { index: 0, indexStartingMonday: 6, short: 'Sun', long: 'Sunday' }
    },
    {
        filler: false,
        day: 17,
        paddedDay: '17',
        weekday: { index: 1, indexStartingMonday: 0, short: 'Mon', long: 'Monday' }
    },
    {
        filler: false,
        day: 18,
        paddedDay: '18',
        weekday: { index: 2, indexStartingMonday: 1, short: 'Tue', long: 'Tuesday' }
    },
    {
        filler: false,
        day: 19,
        paddedDay: '19',
        weekday: { index: 3, indexStartingMonday: 2, short: 'Wed', long: 'Wednesday'}
    },
    {
        filler: false,
        day: 20,
        paddedDay: '20',
        weekday: { index: 4, indexStartingMonday: 3, short: 'Thu', long: 'Thursday'}
    },
    {
        filler: false,
        day: 21,
        paddedDay: '21',
        weekday: { index: 5, indexStartingMonday: 4, short: 'Fri', long: 'Friday' }
    },
    {
        filler: false,
        day: 22,
        paddedDay: '22',
        weekday: { index: 6, indexStartingMonday: 5, short: 'Sat', long: 'Saturday'}
    },
    {
        filler: false,
        day: 23,
        paddedDay: '23',
        weekday: { index: 0, indexStartingMonday: 6, short: 'Sun', long: 'Sunday' }
    },
    {
        filler: false,
        day: 24,
        paddedDay: '24',
        weekday: { index: 1, indexStartingMonday: 0, short: 'Mon', long: 'Monday' }
    },
    {
        filler: false,
        day: 25,
        paddedDay: '25',
        weekday: { index: 2, indexStartingMonday: 1, short: 'Tue', long: 'Tuesday' }
    },
    {
        filler: false,
        day: 26,
        paddedDay: '26',
        weekday: { index: 3, indexStartingMonday: 2, short: 'Wed', long: 'Wednesday'}
    },
    {
        filler: false,
        day: 27,
        paddedDay: '27',
        weekday: { index: 4, indexStartingMonday: 3, short: 'Thu', long: 'Thursday' }
    },
    {
        filler: false,
        day: 28,
        paddedDay: '28',
        weekday: { index: 5, indexStartingMonday: 4, short: 'Fri', long: 'Friday' }
    },
    {
        filler: false,
        day: 29,
        paddedDay: '29',
        weekday: { index: 6, indexStartingMonday: 5, short: 'Sat', long: 'Saturday'}
    },
    {
        filler: false,
        day: 30,
        paddedDay: '30',
        weekday: { index: 0, indexStartingMonday: 6, short: 'Sun', long: 'Sunday' }
    },
    {
        filler: false,
        day: 31,
        paddedDay: '31',
        weekday: { index: 1, indexStartingMonday: 0, short: 'Mon', long: 'Monday' }
    },
    {
        filler: true,
        day: 1,
        paddedDay: '01',
        weekday: { index: 2, indexStartingMonday: 1, short: 'Tue', long: 'Tuesday' }
    },
    {
        filler: true,
        day: 2,
        paddedDay: '02',
        weekday: { index: 3, indexStartingMonday: 2, short: 'Wed', long: 'Wednesday' }
    },
    {
        filler: true,
        day: 3,
        paddedDay: '03',
        weekday: { index: 4, indexStartingMonday: 3, short: 'Thu', long: 'Thursday'}
    },
    {
        filler: true,
        day: 4,
        paddedDay: '04',
        weekday: { index: 5, indexStartingMonday: 4, short: 'Fri', long: 'Friday' }
    },
    {
        filler: true,
        day: 5,
        paddedDay: '05',
        weekday: { index: 6, indexStartingMonday: 5, short: 'Sat', long: 'Saturday'}
    },
    {
        filler: true,
        day: 6,
        paddedDay: '06',
        weekday: { index: 0, indexStartingMonday: 6, short: 'Sun', long: 'Sunday' }
    }
]
```
:::
