
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Energy Accounts API',
      version: '1.0.0',
      description: 'API documentation for the Energy Accounts service',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Replace with your server URL
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/controllers/*.ts'], // Path to the API files
};

export default swaggerOptions;