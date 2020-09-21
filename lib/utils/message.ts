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

type MatcherMessageOptions = MatcherHintOptions & { expand: boolean };

interface MatcherMessage {
	(
		received: unknown,
		expected: unknown,
		options: MatcherMessageOptions
	): CustomMatcherMessage;
}

const message: MatcherMessage = (
	received: unknown,
	expected: unknown,
	options: MatcherMessageOptions
): CustomMatcherMessage => (): string => {
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
