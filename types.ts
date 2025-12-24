
export interface Recipient {
  name: string;
  nickname?: string;
}

export interface ExperienceDetails {
  title: string;
  issuer: string;
  allocationId: string;
  recipients: Recipient[];
  validity: string;
  authorizedBy: string;
  issuedDate: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
