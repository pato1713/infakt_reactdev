export type Nullable<T> = T | null;

export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
  gender: "male" | "female";
};

export type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};
