module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ["IlcLGcvdmQarlpMSjWkm4Q","3qEfXQqWQ1q2snQxBg760g","kyx0y48C89oWpRNmwzyI0g","wpLBR+eI1VeC4Lxlff6unw"]
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
