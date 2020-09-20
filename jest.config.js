module.exports = {
	preset: 'ts-jest',
	globals: {
		'ts-jest': {
			tsConfig: './tsconfig.test.json',
		},
	},
	testEnvironment: 'node',
	moduleNameMapper: {
		'^lib/(.*)$': ['<rootDir>/lib/$1'],
	},
};
