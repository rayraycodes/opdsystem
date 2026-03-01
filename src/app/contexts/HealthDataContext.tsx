import { createContext, useContext, useState, useCallback, ReactNode } from "react";

// FHIR-aligned consent categories based on HL7 FHIR Consent resource
export type ConsentCategory =
  | "treatment" // Medical treatment consent
  | "emergency" // Emergency access consent
  | "research" // Research participation consent
  | "data-sharing" // Health data sharing with third parties
  | "marketing"; // Health-related communications

// Data sharing scope aligned with ABDM/FHIR standards
export type DataSharingScope =
  | "demographics" // Name, age, gender, contact
  | "appointments" // Visit history, scheduling
  | "vitals" // BP, temperature, weight, height
  | "diagnoses" // Clinical diagnoses
  | "medications" // Prescription history
  | "lab-results" // Laboratory test results
  | "imaging" // X-rays, MRI, CT scans
  | "procedures"; // Surgical/procedural history

// Consent status based on FHIR Consent.status
export type ConsentStatus = "draft" | "proposed" | "active" | "rejected" | "inactive" | "entered-in-error";

// Consent provision type (permit or deny)
export type ConsentProvisionType = "permit" | "deny";

// Purpose of use codes (aligned with FHIR/HL7)
export type PurposeOfUse =
  | "TREAT" // Treatment
  | "ETREAT" // Emergency Treatment
  | "HPAYMT" // Healthcare Payment
  | "HOPERAT" // Healthcare Operations
  | "HRESCH" // Healthcare Research
  | "PUBHLTH" // Public Health
  | "GOVTPUBL"; // Government - Public Health

// Individual consent record
export interface ConsentRecord {
  id: string;
  patientId: string;
  category: ConsentCategory;
  status: ConsentStatus;
  scope: DataSharingScope[];
  provisionType: ConsentProvisionType;
  purposeOfUse: PurposeOfUse[];
  grantedTo?: string; // Organization/provider receiving consent
  dateTime: Date;
  expirationDate?: Date;
  sourceReference?: string; // Reference to signed consent document
}

// Health data sharing preferences
export interface DataSharingPreferences {
  // ABHA/ABDM integration (India)
  abhaLinked: boolean;
  abhaId?: string;
  abhaConsentManagerEnabled: boolean;

  // Nepal Health ID integration
  nepalHealthIdLinked: boolean;
  nepalHealthId?: string;

  // General sharing preferences
  shareWithReferringHospitals: boolean;
  shareWithPharmacies: boolean;
  shareWithInsurance: boolean;
  shareWithGovernmentHealth: boolean;
  shareForResearch: boolean;

  // Emergency access
  emergencyAccessEnabled: boolean;
  emergencyAccessPin?: string; // Optional PIN for emergency access

  // Data retention
  dataRetentionPeriodYears: number;
  autoDeleteOnExpiry: boolean;
}

// Audit log entry for compliance (HIPAA, DPDPA, Nepal Privacy Act)
export interface HealthDataAuditEntry {
  id: string;
  timestamp: Date;
  action: "view" | "create" | "update" | "delete" | "share" | "consent-grant" | "consent-revoke" | "export" | "access-request";
  actorType: "patient" | "staff" | "doctor" | "system" | "third-party";
  actorId: string;
  actorName?: string;
  patientId: string;
  dataCategory?: DataSharingScope[];
  recipientOrganization?: string;
  ipAddress?: string;
  userAgent?: string;
  consentReference?: string;
  success: boolean;
  failureReason?: string;
  metadata?: Record<string, unknown>;
}

// Regulatory compliance status
export interface ComplianceStatus {
  // India DPDPA/ABDM
  dpdpaCompliant: boolean;
  abdmRegistered: boolean;
  consentManagerIntegrated: boolean;

  // Nepal regulations
  nepalPrivacyActCompliant: boolean;
  nepalDPARegistered: boolean;

  // International standards
  hipaaAligned: boolean; // For international partnerships
  fhirR4Compatible: boolean;
  hl7Compliant: boolean;

  // Security posture
  encryptionAtRest: boolean;
  encryptionInTransit: boolean;
  mfaEnabled: boolean;
  lastSecurityAudit?: Date;
  nextSecurityAuditDue?: Date;
}

// Data access request (DPDPA/GDPR-style rights)
export interface DataAccessRequest {
  id: string;
  patientId: string;
  requestType: "access" | "rectification" | "erasure" | "portability" | "restriction";
  status: "pending" | "processing" | "completed" | "rejected";
  submittedAt: Date;
  processedAt?: Date;
  processedBy?: string;
  notes?: string;
  attachments?: string[];
}

// Context interface
interface HealthDataContextType {
  // Consent management
  consents: ConsentRecord[];
  addConsent: (consent: Omit<ConsentRecord, "id" | "dateTime">) => ConsentRecord;
  updateConsent: (id: string, updates: Partial<ConsentRecord>) => void;
  revokeConsent: (id: string) => void;
  getActiveConsents: (patientId: string) => ConsentRecord[];
  hasActiveConsent: (patientId: string, category: ConsentCategory, scope?: DataSharingScope[]) => boolean;

  // Data sharing preferences
  sharingPreferences: DataSharingPreferences;
  updateSharingPreferences: (updates: Partial<DataSharingPreferences>) => void;

  // Audit logging
  auditLog: HealthDataAuditEntry[];
  logAuditEntry: (entry: Omit<HealthDataAuditEntry, "id" | "timestamp">) => void;
  getAuditLog: (patientId: string, limit?: number) => HealthDataAuditEntry[];

  // Data access requests
  dataRequests: DataAccessRequest[];
  submitDataRequest: (request: Omit<DataAccessRequest, "id" | "submittedAt" | "status">) => DataAccessRequest;
  getDataRequests: (patientId: string) => DataAccessRequest[];

  // Compliance
  complianceStatus: ComplianceStatus;

  // ABHA integration helpers
  linkAbha: (abhaId: string) => Promise<boolean>;
  unlinkAbha: () => void;

  // Nepal Health ID helpers
  linkNepalHealthId: (healthId: string) => Promise<boolean>;
  unlinkNepalHealthId: () => void;
}

const defaultSharingPreferences: DataSharingPreferences = {
  abhaLinked: false,
  abhaConsentManagerEnabled: false,
  nepalHealthIdLinked: false,
  shareWithReferringHospitals: true,
  shareWithPharmacies: false,
  shareWithInsurance: false,
  shareWithGovernmentHealth: false,
  shareForResearch: false,
  emergencyAccessEnabled: true,
  dataRetentionPeriodYears: 7, // Standard medical records retention
  autoDeleteOnExpiry: false,
};

const defaultComplianceStatus: ComplianceStatus = {
  dpdpaCompliant: true,
  abdmRegistered: true,
  consentManagerIntegrated: true,
  nepalPrivacyActCompliant: true,
  nepalDPARegistered: true,
  hipaaAligned: true,
  fhirR4Compatible: true,
  hl7Compliant: true,
  encryptionAtRest: true,
  encryptionInTransit: true,
  mfaEnabled: true,
  lastSecurityAudit: new Date("2025-12-01"),
  nextSecurityAuditDue: new Date("2026-06-01"),
};

const HealthDataContext = createContext<HealthDataContextType | undefined>(undefined);

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function HealthDataProvider({ children }: { children: ReactNode }) {
  const [consents, setConsents] = useState<ConsentRecord[]>([]);
  const [sharingPreferences, setSharingPreferences] = useState<DataSharingPreferences>(defaultSharingPreferences);
  const [auditLog, setAuditLog] = useState<HealthDataAuditEntry[]>([]);
  const [dataRequests, setDataRequests] = useState<DataAccessRequest[]>([]);
  const [complianceStatus] = useState<ComplianceStatus>(defaultComplianceStatus);

  // Consent management
  const addConsent = useCallback((consent: Omit<ConsentRecord, "id" | "dateTime">): ConsentRecord => {
    const newConsent: ConsentRecord = {
      ...consent,
      id: generateId(),
      dateTime: new Date(),
    };
    setConsents((prev) => [...prev, newConsent]);

    // Log the consent grant
    setAuditLog((prev) => [
      ...prev,
      {
        id: generateId(),
        timestamp: new Date(),
        action: "consent-grant",
        actorType: "patient",
        actorId: consent.patientId,
        patientId: consent.patientId,
        dataCategory: consent.scope,
        consentReference: newConsent.id,
        success: true,
      },
    ]);

    return newConsent;
  }, []);

  const updateConsent = useCallback((id: string, updates: Partial<ConsentRecord>) => {
    setConsents((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  }, []);

  const revokeConsent = useCallback((id: string) => {
    setConsents((prev) => {
      const consent = prev.find((c) => c.id === id);
      if (consent) {
        // Log the revocation
        setAuditLog((prevLog) => [
          ...prevLog,
          {
            id: generateId(),
            timestamp: new Date(),
            action: "consent-revoke",
            actorType: "patient",
            actorId: consent.patientId,
            patientId: consent.patientId,
            dataCategory: consent.scope,
            consentReference: id,
            success: true,
          },
        ]);
      }
      return prev.map((c) => (c.id === id ? { ...c, status: "inactive" as ConsentStatus } : c));
    });
  }, []);

  const getActiveConsents = useCallback(
    (patientId: string): ConsentRecord[] => {
      return consents.filter(
        (c) =>
          c.patientId === patientId && c.status === "active" && (!c.expirationDate || c.expirationDate > new Date())
      );
    },
    [consents]
  );

  const hasActiveConsent = useCallback(
    (patientId: string, category: ConsentCategory, scope?: DataSharingScope[]): boolean => {
      const activeConsents = getActiveConsents(patientId);
      return activeConsents.some((c) => {
        if (c.category !== category || c.provisionType !== "permit") return false;
        if (!scope) return true;
        return scope.every((s) => c.scope.includes(s));
      });
    },
    [getActiveConsents]
  );

  // Data sharing preferences
  const updateSharingPreferences = useCallback((updates: Partial<DataSharingPreferences>) => {
    setSharingPreferences((prev) => ({ ...prev, ...updates }));
  }, []);

  // Audit logging
  const logAuditEntry = useCallback((entry: Omit<HealthDataAuditEntry, "id" | "timestamp">) => {
    setAuditLog((prev) => [
      ...prev,
      {
        ...entry,
        id: generateId(),
        timestamp: new Date(),
      },
    ]);
  }, []);

  const getAuditLog = useCallback(
    (patientId: string, limit?: number): HealthDataAuditEntry[] => {
      const filtered = auditLog.filter((e) => e.patientId === patientId).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
      return limit ? filtered.slice(0, limit) : filtered;
    },
    [auditLog]
  );

  // Data access requests
  const submitDataRequest = useCallback(
    (request: Omit<DataAccessRequest, "id" | "submittedAt" | "status">): DataAccessRequest => {
      const newRequest: DataAccessRequest = {
        ...request,
        id: generateId(),
        submittedAt: new Date(),
        status: "pending",
      };
      setDataRequests((prev) => [...prev, newRequest]);

      // Log the request
      setAuditLog((prev) => [
        ...prev,
        {
          id: generateId(),
          timestamp: new Date(),
          action: "access-request",
          actorType: "patient",
          actorId: request.patientId,
          patientId: request.patientId,
          success: true,
          metadata: { requestType: request.requestType },
        },
      ]);

      return newRequest;
    },
    []
  );

  const getDataRequests = useCallback(
    (patientId: string): DataAccessRequest[] => {
      return dataRequests.filter((r) => r.patientId === patientId).sort((a, b) => b.submittedAt.getTime() - a.submittedAt.getTime());
    },
    [dataRequests]
  );

  // ABHA integration
  const linkAbha = useCallback(
    async (abhaId: string): Promise<boolean> => {
      // Simulated ABHA linking - would integrate with ABDM APIs in production
      setSharingPreferences((prev) => ({
        ...prev,
        abhaLinked: true,
        abhaId,
        abhaConsentManagerEnabled: true,
      }));
      return true;
    },
    []
  );

  const unlinkAbha = useCallback(() => {
    setSharingPreferences((prev) => ({
      ...prev,
      abhaLinked: false,
      abhaId: undefined,
      abhaConsentManagerEnabled: false,
    }));
  }, []);

  // Nepal Health ID integration
  const linkNepalHealthId = useCallback(async (healthId: string): Promise<boolean> => {
    setSharingPreferences((prev) => ({
      ...prev,
      nepalHealthIdLinked: true,
      nepalHealthId: healthId,
    }));
    return true;
  }, []);

  const unlinkNepalHealthId = useCallback(() => {
    setSharingPreferences((prev) => ({
      ...prev,
      nepalHealthIdLinked: false,
      nepalHealthId: undefined,
    }));
  }, []);

  return (
    <HealthDataContext.Provider
      value={{
        consents,
        addConsent,
        updateConsent,
        revokeConsent,
        getActiveConsents,
        hasActiveConsent,
        sharingPreferences,
        updateSharingPreferences,
        auditLog,
        logAuditEntry,
        getAuditLog,
        dataRequests,
        submitDataRequest,
        getDataRequests,
        complianceStatus,
        linkAbha,
        unlinkAbha,
        linkNepalHealthId,
        unlinkNepalHealthId,
      }}
    >
      {children}
    </HealthDataContext.Provider>
  );
}

export function useHealthData() {
  const context = useContext(HealthDataContext);
  if (!context) {
    throw new Error("useHealthData must be used within HealthDataProvider");
  }
  return context;
}
