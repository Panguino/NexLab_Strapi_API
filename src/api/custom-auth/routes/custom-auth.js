"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/auth/facebook/callback",
      handler: "custom-auth.facebookCallback",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/auth/google/callback",
      handler: "custom-auth.googleCallback",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
