module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
        apiToken: "yJr3jSzJrLpc2ITzNMbxGdjb",
        appFilter: "Farmacia",
        teamFilter: "Farmacia-Corrientes",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });