module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_tnzyYKfZW7eYZLWKlCIRWGNdP0bu/3txt4gQ3zK",
      apiToken: "o1xDbfpcrCIRGnBR7rIAA35p",
      appFilter: "farmacia-strapi",
      teamFilter: "gerogramajos-projects",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});