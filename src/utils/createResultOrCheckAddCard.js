import { toast } from 'react-toastify';

const getInputValue = (target, name) =>
  target.querySelector(`input[name="${name}"]`) &&
  target.querySelector(`input[name="${name}"]`).value;

export const createResultAddCard = target => ({
  username: getInputValue(target, 'name'),
  email: getInputValue(target, 'email'),
  description: getInputValue(target, 'description'),
  status: 0,
});

export const validationForm = target => {
  if (!getInputValue(target, 'name').length) {
    toast.warn('Input name, pls!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (!getInputValue(target, 'email').length) {
    toast.warn('Input email, pls!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  if (!getInputValue(target, 'text').length) {
    toast.warn('Input description, pls!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  return true;
};
