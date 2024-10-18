const { Dashboard2 } = require('./dashboard2.class');
const createModel = require('../../models/dashboard2.model');
const hooks = require('./dashboard2.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/dashboard2', new Dashboard2(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dashboard2');

  // Get the schema of the collections 
  app.get("/dashboard2Schema", function (request, response) {
    const schema = createModel(app).schema.tree;
    const result = Object.keys(schema).map(key => {
      return {
        field: key,
        properties: schema[key]
      };
    });
    return response.status(200).json(result);
  });

  service.hooks(hooks);
};