module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("MAIL_DEFAULT_FROM"),
        defaultReplyTo: env("MAIL_DEFAULT_REPLY_TO"),
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      landingPage: true,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  ckeditor: {
    enabled: true,
    config: {
      plugin: {
        // disable data-theme tag setting //
        theme: {
          // optional - defaults to 'default'
          common: [
            {
              name: "theme_common",
              theme: "light",
              editorConfig: {
                // optional - defaults to {}
                // CKEditor 5 configuration
              },
            },
          ],
        },
        field: {
          // optional - defaults to {}
          // CKEditor 5 configuration for fields
          styles: {
            // optional - defaults to {}
            // Inline styles for the editor
          },
        },
      },
    },
  },
});
