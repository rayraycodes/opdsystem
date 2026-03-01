/**
 * OPD Queue Management System - Application Configuration
 * 
 * This file contains core application configuration including
 * creator information, contact details, and system metadata.
 */

export const APP_CONFIG = {
  // Application Metadata
  name: "OPD Queue Management System",
  version: "1.0.0",
  description: "Real-time token tracking, guided navigation, assisted booking, and offline-first reliability for high-volume South Asian OPDs.",
  
  // Creator Information
  creator: {
    name: "A Nepalese",
    email: "reganmaharjann@gmail.com",
    github: "https://github.com/rayraycodes",
    role: "Creator & Lead Developer",
  },

  // Contact Information
  contact: {
    email: "reganmaharjann@gmail.com",
    phone: "+977-1-5522266",
    support: "reganmaharjann@gmail.com",
    demoRequests: "reganmaharjann@gmail.com",
  },

  // Deployment
  urls: {
    demo: "https://rayraycodes.github.io/opdsystem",
    repository: "https://github.com/rayraycodes/opdsystem",
  },

  // Supported Languages
  languages: ["en", "hi", "ne"] as const,
  defaultLanguage: "en" as const,

  // Regional Support
  regions: {
    india: {
      name: "India",
      healthIdSystem: "ABHA (Ayushman Bharat Health Account)",
      regulations: ["DPDPA 2023", "ABDM Health Data Management Policy"],
      currency: "INR",
      currencySymbol: "₹",
    },
    nepal: {
      name: "Nepal",
      healthIdSystem: "Nepal National Health ID",
      regulations: ["Nepal Privacy Act 2018/2025", "Digital Privacy and Data Protection Act 2082"],
      currency: "NPR",
      currencySymbol: "₹",
    },
  },

  // Compliance Standards
  compliance: {
    international: ["FHIR R4", "HL7 Consent Standard", "HIPAA (aligned)", "IHE Profiles"],
    security: {
      encryptionAtRest: "AES-256",
      encryptionInTransit: "TLS 1.3",
      mfaRequired: true,
      auditRetentionYears: 7,
      breachNotificationHours: 72,
    },
  },

  // Feature Flags
  features: {
    healthDataSharing: true,
    consentManagement: true,
    abhaIntegration: true,
    nepalHealthIdIntegration: true,
    offlineMode: true,
    multiLanguage: true,
    elderMode: true,
    voiceGuidance: true,
    highContrast: true,
  },

  // Data Retention Defaults
  dataRetention: {
    defaultYears: 7,
    minYears: 1,
    maxYears: 25,
    consentRecordRetentionYears: 7,
  },
} as const;

// Export individual sections for convenience
export const { creator, contact, compliance, features } = APP_CONFIG;

// Type exports
export type SupportedLanguage = typeof APP_CONFIG.languages[number];
export type Region = keyof typeof APP_CONFIG.regions;
