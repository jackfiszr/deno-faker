type DefinitionCategory = Record<string, string[]>;

interface TitleCategory {
  descriptor: string[];
  level: string[];
  job: string[];
}

export type Definitions = {
  name: DefinitionCategory & { title: TitleCategory };
  address: DefinitionCategory;
  company: DefinitionCategory;
  lorem: DefinitionCategory;
  hacker: DefinitionCategory;
  phone_number: DefinitionCategory;
  finance: DefinitionCategory;
  internet: DefinitionCategory;
  commerce: DefinitionCategory;
  database: DefinitionCategory;
  system: DefinitionCategory;
  date: DefinitionCategory;
  vehicle: DefinitionCategory;
  title: string;
  separator: string;
  [key: string]: DefinitionCategory | string | undefined;
};

export interface NameModule {
  title?: {
    descriptor: string[];
    level: string[];
    job: string[];
  };
  first_name?: string[];
  last_name?: string[];
  male_last_name?: string[];
  female_last_name?: string[];
  male_prefix?: string[];
  female_prefix?: string[];
  [key: string]: string[] | { [key: string]: string[] } | undefined;
}

export interface AddressModule {
  postcode_by_state?: {
    [key: string]: { min: number; max: number };
  };
  [key: string]:
    | string[]
    | { [key: string]: { min: number; max: number } }
    | undefined;
}

export type Locale = Record<
  string,
  string | NameModule | AddressModule | Record<string, unknown>
>;
