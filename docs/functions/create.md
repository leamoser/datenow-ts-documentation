# ✍️ create

::: tip USECASE
Functions under this category help you to create new dates in multiple ways.
:::

To use the functions provided under this category, implement them as follows:

```typescript
import { create } from 'datenow-ts'
```

You will find examples and explanations about all these functions provided
by this function group.

- ``dateNow()``
- ``dateByParams()``
- ``dateByMilliseconds()``
- ``dateByDatestring()``

### dateNow()
> Creates a new date by the current date. 

- **Parameters**: -
- **Type Return**: ``Date``

::: warning IMPORTANT
All examples in these docs assume, the corerct implenentation has already happend.
:::

```typescript
const date = create.dateNow()
// -> returns current date
```

### dateByParams()
> Creates a new date by given parameters.

- **Parameters**: `params: DateObjectParams`
- **Type Return**: ``Date``

```typescript
const date = create.dateByParams({ year: 2023, month: 4, day: 8 })
// -> returns date of 8th of April 2023 and 00:00:00 as time
```

### dateByMilliseconds()
> Creates a new date by timestamp in milliseconds passed since january first 1970.

- **Parameters**: `ms: Number`
- **Type Return**: ``Date``

```typescript
const date = create.dateByMilliseconds(1676979057)
// -> returns date of 21st February 2023
```

### dateByDatestring()
> Creates a new date by a datestring.

- **Parameters**: `datestring: string`
- **Type Return**: ``Date``

```typescript
const date = create.dateByDatestring('2021-04-08')
// -> returns date of 4th April 2021
```
