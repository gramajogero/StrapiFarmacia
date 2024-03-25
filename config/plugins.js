module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_tnzyYKfZW7eYZLWKlCIRWGNdP0bu/B5PmoB6ZFu",
      apiToken: "IuxcJDjnv8CiP0AIr9BK7hsH",
      appFilter: "farmacia-strapi",
      teamFilter: "GeroGramajo's projects", // Aquí se especifica el nombre del equipo en Vercel
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});