# types-env

Gives a simple type validation for your environment variables. Zero dependency.

# How to use

```javascript
// CommonJS modules
const env = require('types-env');
```
```javascript
// ES6 modules
import env from 'types-env';
```
```javascript
const baseUrl = env('REACT_APP_BASE_URL', 'string', 'http://default-base-url.com');
const widthLimit = env('REACT_APP_WIDTH_LIMIT', 'number', 1000);
const isActivated = env('REACT_APP_ACTIVATED', 'boolean', false);
```

Three types are supported: 'string', 'number' and 'boolean'. Default value can be provided as a third argument.
Throws an error in case of type mismatch.

## Boolean variables

For boolean variables the values

    1, true, yes, y, ok, on
 are considered as true. Values

    0, false, no, n, nok, off
are considered as false. Any other value will produce an error.
