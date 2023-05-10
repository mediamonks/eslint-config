import { type Rule } from 'eslint';

const messages = {
  missingThrottleFunction: 'Callback function in useResizeObserver should be throttled.',
  wrapWithUseRafCallback: 'Wrap callback with useRafCallback',
  wrapWithUseDebounceCallback: 'Wrap callback with useDebounceCallback',
  wrapWithUseThrottleCallback: 'Wrap callback with useThrottleCallback',
};

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
      description: 'Callback function in useResizeObserver should be throttled.',
      recommended: true,
      url: 'https://example.com/',
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
        if ('name' in node.callee && node.callee.name !== 'useResizeObserver') {
          return;
        }

        const [, callbackNode] = node.arguments;

        if (callbackNode == null) {
          return;
        }

        // Check if CallExpression is one of the throttle functions
        if (callbackNode.type === 'CallExpression') {
          const { throttleFunctionNames = defaultThrottleFunctionNames } =
            context.options.at(0) ?? {};

          if (
            'name' in callbackNode.callee &&
            throttleFunctionNames.includes(callbackNode.callee.name)
          ) {
            return;
          }
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
