# bolle

Simple webservice to rotate a number. By default it will rotate from 1 to 5, starting over when reached 5. Number is calculated by the start date `2018-01-1`.

[Demo](https://bolle.larsgraubner.de/)

## Calculation

```JavaScript
const num = difference(new Date(), new Date(2018, 0 , 1)) % 5 + 1
```

## Options

You can pass the following options as query parameters.

- number (default: 5)
- start (default: 2018-01-01)

```
https://bolle.larsgraubner.de/?number=3&start=2018-02-01
```
