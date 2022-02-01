module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84ada2c6feb58028f0be5f5f3323f74a'),
  },
});
