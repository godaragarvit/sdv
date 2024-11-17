import { render, screen, fireEvent } from '@testing-library/react';
import BusTicketBookingForm from './BusTicketBookingForm';

describe('Bus Ticket Booking Form', () => {
  it('should render the form with input fields and a button', () => {
    render(<BusTicketBookingForm />);

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /destination/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /seats/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book ticket/i })).toBeInTheDocument();
  });

  it('should update the input values when user types', () => {
    render(<BusTicketBookingForm />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const destinationInput = screen.getByRole('textbox', { name: /destination/i });
    const seatsInput = screen.getByRole('textbox', { name: /seats/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(destinationInput, { target: { value: 'New York' } });
    fireEvent.change(seatsInput, { target: { value: '2' } });

    expect(nameInput.value).toBe('John Doe');
    expect(destinationInput.value).toBe('New York');
    expect(seatsInput.value).toBe('2');
  });

  it('should call the onSubmit function when the form is submitted', () => {
    const onSubmit = jest.fn();
    render(<BusTicketBookingForm onSubmit={onSubmit} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});