import {
	MatcherHintOptions,
	printReceived,
	printExpected,
	matcherHint,
	diff,
} from 'jest-matcher-utils';

interface CustomMatcherMessage {
	(): string;
}

interface MatcherMessage {
	(
		received: unknown,
		expected: unknown,
		options: MatcherHintOptions & { expand: boolean }
	): CustomMatcherMessage;
}

const message: MatcherMessage = (
	received: unknown,
	expected: unknown,
	options
) => (): string => {
	const expectedString = printExpected(expected);
	const receivedString = printReceived(received);

	const hint = matcherHint(
		'toBeTrimmed',
		expectedString,
		receivedString,
		options
	);

	const diffString = diff(expected, received, options);

	return `
	${hint}

	${(diffString && 'Diff: ' + diffString) || ''}
	Expect value to ${options.isNot ? 'not' : ''} be ${expectedString}
	Received: ${receivedString}
	`;
};

export default message;
