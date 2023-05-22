import { type Rule } from 'eslint';
import { getRuleDocumentationPath } from '../lib/getRuleDocumentationPath';

export const name = 'throttle-hook-callback';

const messages = {
  missingThrottleFunction: 'Callback in hook should be throttled.',
  wrapWithUseRafCallback: 'Wrap callback with useRafCallback',
  wrapWithUseDebounceCallback: 'Wrap callback with useDebounceCallback',
  wrapWithUseThrottleCallback: 'Wrap callback with useThrottleCallback',
};

const defaultHookNames = ['useResizeObserver', 'useMutationObserver'];

const defaultThrottleFunctionNames = [
  'useRafCallback',
  'useDebounceCallback',
  'useThrottleCallback',
  'throttle',
  'debounce',
  'raff',
];

export default {
  meta: {
    messages,
    docs: {
      description: 'Callback in hook should be throttled.',
      recommended: true,
      url: getRuleDocumentationPath(name),
    },
    schema: [
      {
        type: 'object',
        properties: {
          throttleFunctionNames: {
            description: 'The throttle function identifiers',
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    ],
    hasSuggestions: true,
  },

  create(context): Rule.RuleListener {
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      CallExpression(node): void {
        const {
          throttleFunctionNames = defaultThrottleFunctionNames,
          hookNames = defaultHookNames,
        } = context.options.at(0) ?? {};

        if ('name' in node.callee && !hookNames.includes(node.callee.name)) {
          return;
        }

        const [, callbackNode] = node.arguments;

        if (callbackNode == null) {
          return;
        }

        if (
          callbackNode.type === 'CallExpression' &&
          'name' in callbackNode.callee &&
          // Check if CallExpression is one of the throttle functions
          throttleFunctionNames.includes(callbackNode.callee.name)
        ) {
          return;
        }

        context.report({
          message: messages.missingThrottleFunction,
          node: callbackNode,
          suggest: [
            {
              messageId: 'wrapWithUseRafCallback',
              *fix(fixer): Generator<Rule.Fix> {
                yield fixer.insertTextBefore(callbackNode, 'useRafCallback(');
                yield fixer.insertTextAfter(callbackNode, ')');
              },
            },
            {
              messageId: 'wrapWithUseDebounceCallback',
              *fix(fixer): Generator<Rule.Fix> {
                yield fixer.insertTextBefore(callbackNode, 'useDebounceCallback(');
                yield fixer.insertTextAfter(callbackNode, ', [], 200)');
              },
            },
            {
              messageId: 'wrapWithUseThrottleCallback',
              *fix(fixer): Generator<Rule.Fix> {
                yield fixer.insertTextBefore(callbackNode, 'useThrottleCallback(');
                yield fixer.insertTextAfter(callbackNode, ', [], 200)');
              },
            },
          ],
        });
      },
    };
  },
} satisfies Rule.RuleModule;
