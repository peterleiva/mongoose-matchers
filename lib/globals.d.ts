import './index';

declare global {
	namespace jest {
		interface Matchers<R> {
			toHaveRequired(attribute: string): R;
			toBeTrimmed(attribute: string): R;
		}
	}
}
