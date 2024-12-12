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

export interface NameDefinition {
  male_prefix: string[];
  male_last_name: string[];
  female_prefix: string[];
  female_last_name: string[];
  [key: string]: string[] | undefined;
}

export type Locale = Record<string, string | NameDefinition>;
