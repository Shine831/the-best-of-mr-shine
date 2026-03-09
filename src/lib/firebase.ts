import { initializeApp, getApps, getApp } from "firebase/app";

// Firebase configuration (Placeholder values)
// In a real application, these should be environment variables.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy-auth-domain",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dummy-project-id",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy-storage-bucket",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "dummy-sender-id",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "dummy-app-id",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Placeholder for Stitch integration or serverless functions wrapper
// "Intègre les fonctions Firebase via Stitch pour une architecture serverless."
export const invokeServerlessFunction = async (functionName: string, payload: any) => {
  console.log(`[Stitch/Firebase] Invoking serverless function: ${functionName} with payload`, payload);
  // Implementation would go here
  return { success: true, timestamp: new Date().toISOString() };
};

export default app;
