export type Nullable<T> = T | null;

export type AccountantType = {
  cell: string; // numer telefonu
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};
