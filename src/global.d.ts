declare type MemberLinkType = "linkedin" | "github";

declare type Member = {
  name: string;
  company?: string;
  profile: string;
  links: Partial<Record<MemberLinkType, string>>;
};

declare type Rule = {
  id: string;
  name: string;
  severity: "CRITICAL" | "INFO" | "MAJOR" | "MINOR";
  technologies: string[];
  status: string;
};

declare type RuleMeta = {
  technologies: string[];
  severities: string[];
  statuses: string[];
};

declare type RuleList = {
  items: Rule[];
  meta: RuleMeta;
};
