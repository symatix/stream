import { renderComponent, expect } from '../test_helper';
import { App } from '../../src/components/app';

describe('COMPONENT - App:', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(App);
	})

	it('renders the container', () => {
		expect(component.find('.App')).to.exist;
	});
});
