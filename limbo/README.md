## limbo

- A rpc server for querying mongodb.
- Exchange data/message cross applications.
- Listen for the data's change and emit events.

### Providers

- `mongo` query via mongoose api
- `rpc` query via rpc methods

### Overwrite the mongoose model methods

AFAIK, we can use hooks or so called middlewares to modify the mongoose model object before save and remove functions, but it does not works on update function. There was even leaded to an argument on github, but the maintainers still don't pay their attension on this issue. So I decide to use some tricks to overwrite the mongoose model methods, and make the hooks work. For example, we have an update function in model, we need update the updatedAt key when we save data by update function, we can overwrite this function.

in limbo, we supply an overwrite function to help you overwrite the same name function of each model.

```js
limbo = require 'limbo'
db = limbo.use 'test',
  conn: mongoose.createConnection 'mongodb://localhost/test'
// Overwrite the update function
db.loadOverwrite 'update', (_update) ->
  (conditions, update) ->
    update or= new Date
    _update.apply this, arguments
// Load schemas
db.loadSchema 'User', UserSchema
// Then each update function will auto update the updateAt key when executed
db.user.update()
```
