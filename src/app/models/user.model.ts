export interface UserModel {
  readonly first: string;
  readonly last: string;
  readonly address: {
    readonly street: {
      readonly number: string;
      readonly name: string;
    };
    readonly city: string;
    readonly state: string;
    readonly zip: string;
  };
}

