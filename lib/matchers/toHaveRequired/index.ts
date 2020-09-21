import predicate from 'matchers/toBeTrimmed/predicate';
/**
 * Custom matcher to test required field for mongoose documents
 */

import type { MongooseDocument } from 'mongoose';
import message from 'utils/message';

export default {
	toHaveRequired(
		this: jest.MatcherContext,
		received: MongooseDocument,
		attribute: string
	): jest.CustomMatcherResult {
		const options = {
			isNot: this.isNot,
			promise: this.promise,
			expand: this.expand,
		};

		received.set(attribute, undefined);

		return {
			pass: predicate(received, attribute),
			message: message(received, 'required', options),
		};
	},
};
