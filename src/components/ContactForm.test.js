import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm.js';

test('contact form renders', () => {
	render(<ContactForm />);
})
