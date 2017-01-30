// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: 'galvanize-classified-dev'
    },
    test: {
        client: 'pg',
        connection: 'galvanize-classified-test'
    },
    production: {
        client: 'pg',
        connection: 'process.env.DATABASE_URL'
    }
};
