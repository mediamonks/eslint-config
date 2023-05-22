import { repository } from '../package.json';

export function getRuleDocumentationPath(ruleName: string): string {
  return `${repository.url.slice(0, -4)}/${repository.directory}/docs/rules/${ruleName}.md`;
}
