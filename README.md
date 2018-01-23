# Rotator

Simple webservice to rotate a number. By default it will rotate from 1 to 5, starting over when reached 5. Number is calculated by the start date `2018-01-1`.

## Calculation

```JavaScript
const num = difference(new Date(), new Date(2018, 0 , 1)) % 5 + 1
```

## Customization

You can pass a number to set a custom base number:

```
http://127.0.0.1:3000/7
```

Also you can simply set a custom start date. In that case the number is required. If the date is invalid the param is ignored.

```
http://localhost:3000/7/2018-01-15
```