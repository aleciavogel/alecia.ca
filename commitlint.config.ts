import type { RuleConfigCondition, TargetCaseType } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const config = {
  extends: ['gitmoji'],
  parserPreset: 'gitmoji-parser-opts',
  rules: {
    'body-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
    // not setting any max-line-length since we are writing release-notes
    // in our chore(release) commit messages. @see release.config.ts '@semantic-release/git' configurations.
    // 'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100] as const,
    'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
    // 'footer-max-line-length': [
    //     RuleConfigSeverity.Error,
    //     'always',
    //     100,
    // ] as const,
    'header-max-length': [RuleConfigSeverity.Error, 'always', 200] as const,
    'header-trim': [RuleConfigSeverity.Error, 'always'] as const,
    'subject-case': [
      RuleConfigSeverity.Error,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ] as [RuleConfigSeverity, RuleConfigCondition, TargetCaseType[]],
    'subject-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'] as const,
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'] as const,
    'type-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'hotfix',
        'wip',
        'docs',
        'style',
        'chore',
        'test',
        'breaking',
        'init',
      ],
    ] as [RuleConfigSeverity, RuleConfigCondition, string[]],
  },
}

export default config
