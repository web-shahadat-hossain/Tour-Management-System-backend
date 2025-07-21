import dotenv from "dotenv";

dotenv.config();

interface IEnvVars {
  PORT: string;
  DB_URL: string;
  NODE_ENV: "development" | "production" | "test";
}

// Simple runtime check for required variables
function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`❌ Missing environment variable: ${name}`);
  }
  return value;
}

export const envVars: IEnvVars = {
  PORT: getEnvVar("PORT"),
  DB_URL: getEnvVar("DB_URL"),
  NODE_ENV: getEnvVar("NODE_ENV") as "development" | "production" | "test",
};
