import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm.js';

test('contact form renders', () => {
	render(<ContactForm />);
})

test('user can fill out and submit form as intended', () => {
	const { getByLabelText } = render(<ContactForm />)

	fireEvent.change(getByLabelText(/first name/i), { target: { value: 'Justin' } });
	fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Lohner' } });
	fireEvent.change(getByLabelText(/email/i), { target: { value: 'justin@justin.com' } });
	fireEvent.change(getByLabelText(/message/i), { target: { value: 'this is a test message' } });


})
