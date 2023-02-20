# 🪢 span

> To use the functions provided under this category, implement them as follows:

```typescript
import { span } from 'datenow-ts'
```

Functions under this category give you informations about the the time between two dates.
For now, only two functions are implemented.

### years(from, to)

```typescript
// -> example
import { create, span } from 'datenow-ts'
const from = create.dateNow()
const to = create.dateByDatestring('2050-04-07')
console.log('array with years between', span.years(from, to))
// returns array with all years between -> [2023,2024,2025,...]
```

### months(from,to)

```javascript
// -> example
import { create, span } from 'datenow-ts'
const from = create.dateNow()
const to = create.dateByDatestring('2024-04-07')
console.log('array with months between', span.months(from, to))
// returns array with all months between -> [ {index: 1, number: 2, short: 'Feb', long: 'February', year: 2023 }, {index: 2, number: 3, short: 'Mar', long: 'March', year: 2023 }, ... ] 
```

