import "server-only";

import { google } from "googleapis";
import env from "./env";
import { JobApiResponseDataType } from "./type";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

export const getJobs = async (): Promise<JobApiResponseDataType[]> => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: env.GOOGLE_SHEET_ID,
      range: env.GOOGLE_SHEET_RANGE,
    });

    const rows = response.data.values ?? [];

    return rows.slice(1).map((row) => ({
      serialNumber: String(row[1] ?? ""),
      jobTitle: String(row[2] ?? ""),
      jobDescriptions: String(row[3] ?? ""),
      location: String(row[4] ?? ""),
      jobType: String(row[5] ?? ""),
      slug: String(row[6] ?? ""),
      experience: String(row[7] ?? ""),
      vacancies: Number(row[8] ?? ""),
      qualification: String(row[9] ?? ""),
      workMode: String(row[10] ?? ""),
      responsibilities: JSON.parse(String(row[11] || "[]")),
      requirementsQualification: JSON.parse(String(row[12] || "[]")),
    }));
  } catch (error) {
    console.error("Failed to fetch jobs from Google Sheets:", error);

    throw new Error("Unable to fetch jobs.");
  }
};
