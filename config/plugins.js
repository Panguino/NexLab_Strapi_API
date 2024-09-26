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
  menus: {},
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  "deploy-plugin": {
    enabled: env("DEPLOYMENT_ENABLED"),
    resolve: "./src/plugins/deploy-plugin",
    config: {
      post_url: env("DEPLOYMENT_URL"),
      button_text: env("DEPLOYMENT_BUTTON_TEXT"),
      result_text: env("DEPLOYMENT_RESULT_TEXT"),
    },
  },
  seo: {
    enabled: true,
  },
  backup: {
    enabled: true,
    config: {
      cronSchedule: "0 9-17 * * *", // At minute 0 past every hour from 9 through 17
      storageService: "aws-s3",
      awsAccessKeyId: env("AWS_ACCESS_KEY_ID"),
      awsSecretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
      awsRegion: env("AWS_REGION"),
      awsS3Bucket: env("AWS_S3_BUCKET"),
      databaseDriver: env("DATABASE_CLIENT"),
      pgDumpExecutable: "/path/to/your/pg_dump/bin",
      pgDumpOptions: ["--clean", "--if-exists"],
      allowCleanup: true,
      timeToKeepBackupsInSeconds: 172800, // 2 days
      cleanupCronSchedule: "0 9 * * *", // Each day at 09:00 AM
      errorHandler: (error, strapi) => {
        console.log(error);
      },
    },
  },
});
