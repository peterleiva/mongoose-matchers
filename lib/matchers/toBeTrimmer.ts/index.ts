/**
 * Check if a attribute was trimmed correctly
 */

import type { MongooseDocument } from 'mongoose';
import predicate from './predicate';
import message from 'utils/message';

export default {
	toBeTrimmed(
		this: jest.MatcherContext,
		received: MongooseDocument,
		attribute: string
	): jest.CustomMatcherResult {
		const options = {
			isNot: this.isNot,
			promise: this.promise,
			expand: this.expand,
		};

		return {
			message: message(received.get('attribute'), attribute, options),
			pass: predicate(received, attribute),
		};
	},
};
