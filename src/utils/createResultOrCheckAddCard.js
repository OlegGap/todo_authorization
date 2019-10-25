import shortId from 'short-id';
import { toast } from 'react-toastify';

const getInputValue = (target, name) =>
  target.querySelector(`input[name="${name}"]`) &&
  target.querySelector(`input[name="${name}"]`).value;

export const createResultAddCard = target => {
  const newCardContent = {
    id: shortId.generate(),
    title: getInputValue(target, 'title'),
  };

  if (getInputValue(target, 'description'))
    newCardContent.description = getInputValue(target, 'description');

  if (getInputValue(target, 'deadline'))
    newCardContent.deadline = getInputValue(target, 'deadline');

  if (target.querySelector(`input[name="mark"]:checked`))
    newCardContent.mark = target.querySelector(
      `input[name="mark"]:checked`,
    ).value;

  return newCardContent;
};

export const validationForm = target => {
  if (!getInputValue(target, 'title').length) {
    toast.warn('Input title, pls!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return false;
  }
  return true;
};
