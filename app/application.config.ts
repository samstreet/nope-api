const ApplicationConfig = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/node-api',
    LISTEN_PORT: 3333
};

export default ApplicationConfig;