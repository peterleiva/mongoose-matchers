# mongoose-matchers

Mongoose matchers fornece alguns matchers personalizados para que possam ser
usados junto com os seus testes no ambiente jest.
Os testes são para testar seus modelos quanto a validaão de acordo usando opões de esquema.

## Installation

```bash
npm install --save-dev mongoose-matchers
```

## Usage

Given a mongoose model

```javascript
import { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
   }
});
```

You can test schema options:

```javascript
expect(doc).toHaveRequired('name');
expect(doc).toBeTrimmed('name', ' some raw value  ');
```

## Matchers

For now the only avaliables are:
| matchers | description |
|-------------|----------------|
| `toHaveRequired(path: string)` | Test if given attribute is required indeed |
| `toBeTrimmed(attribute: string, rawValue: string)` | Check if doc value was trimmed |

## Contributing

Pull requests are welcome. more to come...

## License

[MIT](https://choosealicense.com/licenses/mit/)
