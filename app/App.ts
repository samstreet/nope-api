import * as express from 'express';

class App {
    public express

    constructor () {
        this.express = express();
        this.mountModules();
        this.mountRoutes();
    }

    /**
     * Mount the application modules
     */
    private mountModules (): void {

    }

    /**
     * Mount the application routes
     */
    private mountRoutes (): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        })
        this.express.use('/', router)
    }
}

export default new App().express