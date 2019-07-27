import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../components/SignUp';

describe("SignUp component", () => {
	test("Matches the snapshot", () => {
		const tree = renderer.create(<SignUp />).toJSON();
		expect(tree).toMatchSnapshot();
	})
})