import expectExport from 'expect';
import * as matchers from './matchers';

const jestExpect = expectExport;

if (jestExpect !== undefined) {
	console.log('matchers', matchers);

	jestExpect.extend(matchers);
} else {
	console.error("Unable to find Jest's global expect.");
}
