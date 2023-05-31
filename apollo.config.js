module.exports = {
  client: {
    service: {
      name: "jobjack-server", // Provide a name for your service
      url: "http://localhost:3000/graphql", // Replace with your GraphQL endpoint URL
    },
    includes: [
      "src/**/*.ts", // Path to your TypeScript files
      "src/**/*.graphql", // Path to your GraphQL schema and operations
    ],
    excludes: ["node_modules/**"], // Exclude the node_modules folder
  },
};
