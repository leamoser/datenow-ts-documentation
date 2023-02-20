# 🤲 get

> To use the functions provided under this category, implement them as follows:

```typescript
import { get } from 'datenow-ts'
```

These are the functions you have at your disposal after implementing.
The parameter you pass to all these functions is a datestring (ideally created by a function from the ``create``
section).


| command                           | eg. return                                                                  |
|-----------------------------------|-----------------------------------------------------------------------------|
| ``year(date)``                    | `2023`                                                                      |
| ``yearObject(date)``              | `{long: 2023, short: 23}`                                                   |
| ``monthIndex(date)``              | `0` for january                                                             |
| ``monthObject(date, lang)``       | `{index: 0, number: 1, paddedNumber: '01', short: 'Jan', long: 'January' }` |
| ``calendarizedMonth(date, lang)`` | Returns an array with all days of the month the passed date is in.          |
| ``day(date)``                     | `1`                                                                         |
| ``dayObject(date)``               | `{ number: 1, paddedNumber: '01' }`                                         |
| ``weekdayIndex(date)``            | `0` for sunday                                                              |
| ``weekdayObject(date, lang)``     | `{index: 0, indexStartingMonday: 6, short: 'Su', long: 'Sunday'}`           |
| ``calendarWeek(prefix,date)``     | `KW 4`                                                                      |
| ``hour(date)``                    | `14` for 2 PM                                                               |
| ``minute(date)``                  | `32`                                                                        |
| ``second(date)``                  | `19`                                                                        |
| ``millisecond(date)``             | `233`                                                                       |
