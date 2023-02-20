# 🎰 format

> To use the functions provided under this category, implement them as follows:

```typescript
import { format } from 'datenow-ts'
```

The two simple commands are:

| command              | params            | eg. response               |
|----------------------|-------------------|----------------------------|
| ``toISO()``          | date (datestring) | `2022-01-01T14:26:50.803Z` |
| ``toMilliseconds()`` | date (datestring) | `1641047269000`            |

Then you have another two commands, which are a little more complex.

### toTime()

```typescript
// -> example
import { create, format } from 'datenow-ts'

const date = create.dateNow()
const formatedTime = format.toTime(date, 'H:i')
// -> returns 23:30
```

The first parameter is the datestring.
As a second parameter you can pass the format you wish as a string.
Reserved letters will be parsed, everything else will act as a seperator.

*Reserved letters*

- ``H`` Hours
- ``i`` Minutes
- ``s`` Seconds
- ``v`` Milliseconds

### toDate()

```typescript
// -> example 
import { create, format } from 'datenow-ts'

const date = create.dateNow()
const formatedDate = format.toDate(date, 'd. F Y')
// --> returns 1. January 2022
```

The first parameter is the datestring.
As a second parameter you can pass the format you wish as a string.
Reserved letters will be parsed, everything else will act as seperators.

*Reserved letters*

- ``Y`` Year long
- ``y`` Year short
- ``F`` Month long
- ``M`` Month short
- ``m`` Month number
- ``d`` Day
- ``D`` Weekday short
- ``l`` Weekday long
