const jwtConfig = {
  access: {
    type: "access",
    expiresIn: `${1000 * 60 * 5 * 24}`,
  },
  refresh: {
    type: "refresh",
    expiresIn: `${1000 * 60 * 60 * 24}`,
  },
};

module.exports = jwtConfig;
