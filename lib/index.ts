import * as matchers from './matchers';
import expect from 'expect';

if (expect !== undefined) {
	expect.extend(matchers);
} else {
	console.error("Unable to find Jest's global expect.");
}
