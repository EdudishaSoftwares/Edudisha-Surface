export type BookDemoRequestPayloadType = {
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
  message: string;
};

export type BookDemoRequestResponseType = {
  ok: boolean;
  errorMessage?: string;
};
