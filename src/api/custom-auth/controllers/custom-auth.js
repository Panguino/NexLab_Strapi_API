"use strict";

module.exports = {
  async facebookCallback(ctx) {
    strapi.log.info("🔵 Facebook callback initiated");

    try {
      const { access_token } = ctx.query;
      strapi.log.info("📝 Query params:", JSON.stringify(ctx.query, null, 2));

      if (!access_token) {
        strapi.log.error("❌ Missing access token in request");
        return ctx.badRequest("Missing access token");
      }

      strapi.log.info("🌐 Fetching user data from Facebook API...");

      // Get user info from Facebook
      const facebookResponse = await fetch(
        `https://graph.facebook.com/me?fields=id,email,name&access_token=${access_token}`,
      );

      strapi.log.info(
        "📡 Facebook API response status:",
        facebookResponse.status,
      );
      const facebookUser = await facebookResponse.json();
      strapi.log.info(
        "👤 Facebook user data:",
        JSON.stringify(facebookUser, null, 2),
      );

      if (!facebookUser.email) {
        strapi.log.error("❌ Facebook user has no email");
        return ctx.badRequest("Facebook account must have an email");
      }

      strapi.log.info(
        "🔍 Searching for existing user with email:",
        facebookUser.email,
      );

      // Check if user exists by email
      let user = await strapi.query("plugin::users-permissions.user").findOne({
        where: { email: facebookUser.email },
      });

      if (user) {
        strapi.log.info(
          "✅ Found existing user, linking Facebook account. User ID:",
          user.id,
        );

        // Link Facebook account to existing user
        await strapi.query("plugin::users-permissions.user").update({
          where: { id: user.id },
          data: {
            facebookId: facebookUser.id,
            provider: "facebook",
          },
        });

        strapi.log.info("🔗 Facebook account linked successfully");
      } else {
        strapi.log.info("👤 No existing user found, creating new user...");

        // Create new user with Facebook data
        const role = await strapi
          .query("plugin::users-permissions.role")
          .findOne({
            where: { type: "authenticated" },
          });

        strapi.log.info("🎭 Found authenticated role:", role?.id);

        const username = facebookUser.name.replace(/\s+/g, "").toLowerCase();
        strapi.log.info("📝 Generated username:", username);

        user = await strapi.query("plugin::users-permissions.user").create({
          data: {
            username,
            email: facebookUser.email,
            facebookId: facebookUser.id,
            provider: "facebook",
            confirmed: true,
            role: role.id,
          },
        });

        strapi.log.info("✅ New user created successfully. User ID:", user.id);
      }

      strapi.log.info("🔐 Generating JWT token...");

      // Generate JWT
      const jwt = strapi.plugins["users-permissions"].services.jwt.issue({
        id: user.id,
      });

      strapi.log.info("✅ JWT generated successfully");

      const response = {
        jwt,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };

      strapi.log.info("🎉 Facebook authentication completed successfully");
      ctx.send(response);
    } catch (error) {
      strapi.log.error("💥 Facebook authentication failed:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });

      ctx.badRequest("Facebook authentication failed", {
        error: error.message,
      });
    }
  },

  async googleCallback(ctx) {
    strapi.log.info("🔵 Google callback initiated");

    try {
      const { access_token } = ctx.query;
      strapi.log.info("📝 Query params:", JSON.stringify(ctx.query, null, 2));

      if (!access_token) {
        strapi.log.error("❌ Missing access token in request");
        return ctx.badRequest("Missing access token");
      }

      strapi.log.info("🌐 Fetching user data from Google API...");

      // Get user info from Google
      const googleResponse = await fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`,
      );

      strapi.log.info("📡 Google API response status:", googleResponse.status);
      const googleUser = await googleResponse.json();
      strapi.log.info(
        "👤 Google user data:",
        JSON.stringify(googleUser, null, 2),
      );

      if (!googleUser.email) {
        strapi.log.error("❌ Google user has no email");
        return ctx.badRequest("Google account must have an email");
      }

      strapi.log.info(
        "🔍 Searching for existing user with email:",
        googleUser.email,
      );

      // Check if user exists by email
      let user = await strapi.query("plugin::users-permissions.user").findOne({
        where: { email: googleUser.email },
      });

      if (user) {
        strapi.log.info(
          "✅ Found existing user, linking Google account. User ID:",
          user.id,
        );

        // Link Google account to existing user
        await strapi.query("plugin::users-permissions.user").update({
          where: { id: user.id },
          data: {
            googleId: googleUser.id,
            provider: "google",
          },
        });

        strapi.log.info("🔗 Google account linked successfully");
      } else {
        strapi.log.info("👤 No existing user found, creating new user...");

        // Create new user with Google data
        const role = await strapi
          .query("plugin::users-permissions.role")
          .findOne({
            where: { type: "authenticated" },
          });

        strapi.log.info("🎭 Found authenticated role:", role?.id);

        const username = googleUser.name.replace(/\s+/g, "").toLowerCase();
        strapi.log.info("📝 Generated username:", username);

        user = await strapi.query("plugin::users-permissions.user").create({
          data: {
            username,
            email: googleUser.email,
            googleId: googleUser.id,
            provider: "google",
            confirmed: true,
            role: role.id,
          },
        });

        strapi.log.info("✅ New user created successfully. User ID:", user.id);
      }

      strapi.log.info("🔐 Generating JWT token...");

      // Generate JWT
      const jwt = strapi.plugins["users-permissions"].services.jwt.issue({
        id: user.id,
      });

      strapi.log.info("✅ JWT generated successfully");

      const response = {
        jwt,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };

      strapi.log.info("🎉 Google authentication completed successfully");
      ctx.send(response);
    } catch (error) {
      strapi.log.error("💥 Google authentication failed:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });

      ctx.badRequest("Google authentication failed", {
        error: error.message,
      });
    }
  },
};
