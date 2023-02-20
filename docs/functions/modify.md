# 🎭 modify

> To use the functions provided under this category, implement them as follows:

```typescript
import { modify } from 'datenow-ts'
```

In this modify-section, you have the same functionalities for every unit.
All existing units are:

- year
- month
- day
- hour
- minute
- second

All available actions are the following:

| command                                        | params                           |
|------------------------------------------------|----------------------------------|
| ``modify.[unit].changeTo(date,newUnit)``       | date (datestring), unit (number) |
| ``modify.[unit].add(date,numberOfUnits)``      | date (datestring), unit (number) |
| ``modify.[unit].subtract(date,numberOfUnits)`` | date (datestring), unit (number) |

### Example

```typescript
import { create, modify } from 'datenow-ts'
const date = create.dateByParams({ year: 2023, month: 1, day: 1 })
console.log('date 10 years in the future:', modify.year.add(date, 10))
```
