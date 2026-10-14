import "server-only";

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string({
      error: "Add your Google Service Account Email.",
    }),

    GOOGLE_PRIVATE_KEY: z.string().min(1, {
      error: "Google Private Key is required.",
    }),

    GOOGLE_SHEET_ID: z.string().min(1, {
      error: "Google Sheet ID is required.",
    }),

    GOOGLE_SHEET_RANGE: z.string().min(1, {
      error: "Google Sheet Range is required.",
    }),
  },

  runtimeEnv: {
    GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,

    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,

    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,

    GOOGLE_SHEET_RANGE: process.env.GOOGLE_SHEET_RANGE,
  },
});

export default env;
