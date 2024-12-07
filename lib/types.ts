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
};

export type Locale = Record<string, string | object>;
