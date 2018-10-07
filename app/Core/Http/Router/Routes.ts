import * as express from 'express';

class Routes implements RoutesInterface{

    routes = [
        {
            uri: '/',
            path: 'root',
            methods: ['get']
        }
    ];

    registerRoutes():void {
        this.routes.forEach((route) => {
            express.router[method](route.uri, function(req, res) {
                  // Automatically 404 if the `route.path` doesn't exist
                  console.error(e);
                  require(routesDir + 'errors')['404'](req, res, route.path);
                  return;
                }
        });
    }


}

export default new Routes();