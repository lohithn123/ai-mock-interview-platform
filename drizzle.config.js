/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:"postgresql://neondb_owner:npg_5KLSwQJElBp3@ep-jolly-heart-a5o141f0-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require&channel_binding=require" ,
    }
  };