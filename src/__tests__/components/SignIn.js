import { LoginForm } from "../../../components/SignInContainer";
import { render, fireEvent, waitFor } from '@testing-library/react-native';


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        const onSubmit = jest.fn();
        const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={onSubmit} />);

        
        fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(getByPlaceholderText('Password'), 'password');
        fireEvent.press(getByText('Submit'));

        expect(onSubmit).toHaveBeenCalledTimes(1);

       await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'kalle',
            password: 'password',
      });

      waitFor()
    
    });
  });
})});