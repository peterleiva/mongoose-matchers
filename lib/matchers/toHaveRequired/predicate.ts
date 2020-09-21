import { MongooseDocument } from 'mongoose';

export default (document: MongooseDocument, attribute: string): boolean => {
	const error = document.validateSync();
	return (
		error?.errors?.[attribute]?.message === `Path \`${attribute}\` is required.`
	);
};
