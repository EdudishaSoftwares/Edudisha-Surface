export type BookDemoRequestPayloadType = {
  first_name: string;
  last_name: string;
  email: string;
  preffered_date: Date;
  message: string;
};

export type BookDemoRequestResponseType = {
  message?: string;
};
