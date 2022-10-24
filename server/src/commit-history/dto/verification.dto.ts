export interface Verification {
  verified: boolean;
  reason: string;
  signature: string | null;
  payload: string | null;
}
