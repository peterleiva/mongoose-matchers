import type { MongooseDocument } from 'mongoose';

export default (received: MongooseDocument, attribute: string): boolean => {
	const actual = received.get(attribute);
	return !actual || actual.trim() === actual;
};
