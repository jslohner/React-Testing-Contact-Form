import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ContactForm from './ContactForm.js';

test('contact form renders', () => {
	render(<ContactForm />);
})

test('user can fill out and submit form as intended', async () => {
	const { getByLabelText, getByTestId } = render(<ContactForm />);

	const firstNameInput = getByLabelText(/first name/i);
	const lastNameInput = getByLabelText(/last name/i);
	const emailInput = getByLabelText(/email/i);
	const messageInput = getByLabelText(/message/i);
	const submitButton = getByTestId('submitButton');

	expect(firstNameInput).toBeInTheDocument();
	expect(lastNameInput).toBeInTheDocument();
	expect(emailInput).toBeInTheDocument();
	expect(messageInput).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();

	fireEvent.change(firstNameInput, { target: { value: 'Jus' } });
	fireEvent.change(lastNameInput, { target: { value: 'Lohner' } });
	fireEvent.change(emailInput, { target: { value: 'justin@justin.com' } });
	fireEvent.change(messageInput, { target: { value: 'this is a test message' } });

	fireEvent.click(submitButton);

	await waitFor(() => {
		expect(getByTestId('formData'))
	})
})
