export interface IVerification {
  verified: boolean;
  reason: string;
  signature: string | null;
  payload: string | null;
}
