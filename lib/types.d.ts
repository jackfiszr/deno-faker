type DefinitionCategory = Record<string, string[]>;

export interface NameModule {
  title?: {
    descriptor: string[];
    level: string[];
    job: string[];
  };
  first_name: string[];
  last_name?: string[];
  male_last_name?: string[];
  female_last_name?: string[];
  male_prefix?: string[];
  female_prefix?: string[];
  [key: string]: string[] | { [key: string]: string[] } | undefined;
}

interface AddressModule {
  postcode_by_state: {
    [key: string]: { min: number; max: number };
  };
  [key: string]:
    | string[]
    | { [key: string]: { min: number; max: number } }
    | undefined;
}

interface CommerceModule {
  product_name: {
    adjective: string[];
    material: string[];
    product: string[];
  };
}

export interface DateDefinition {
  month: {
    wide: string[];
    abbr: string[];
    wide_context?: string[];
    abbr_context?: string[];
  };
  weekday: {
    wide: string[];
    abbr: string[];
    wide_context?: string[];
    abbr_context?: string[];
  };
}

interface FinanceDefinitions {
  currency: Record<string, { code: string; symbol: string }>;
  credit_card: Record<string, string[]>;
}

export type Definitions = {
  name: DefinitionCategory & NameModule;
  address: DefinitionCategory & AddressModule;
  company: DefinitionCategory;
  lorem: DefinitionCategory;
  hacker: DefinitionCategory;
  phone_number: DefinitionCategory;
  finance: DefinitionCategory & FinanceDefinitions;
  internet: DefinitionCategory;
  commerce: DefinitionCategory & CommerceModule;
  database: DefinitionCategory;
  system: DefinitionCategory;
  date: DefinitionCategory & DateDefinition;
  vehicle: DefinitionCategory;
  title: string;
  separator: string;
  [key: string]: DefinitionCategory | string | undefined;
};

export type Locale = Record<
  string,
  string | NameModule | AddressModule | Record<string, unknown>
>;
