import { render, fireEvent } from '@testing-library/react';
import TaskForm from '../Components/TaskForm';

describe('Task Form Component', () => {
  test('Test form elements', () => {
    const { getByLabelText, getByText } = render(<TaskForm />);
    expect(getByLabelText('Title')).toBeInTheDocument();
    expect(getByLabelText('Description')).toBeInTheDocument();
    expect(getByText('Add Task')).toBeInTheDocument();
  });

  test('Task input', () => {
    const { getByLabelText } = render(<TaskForm />);
    const titleInput = getByLabelText('Title');
    const descriptionInput = getByLabelText('Description');

    fireEvent.change(titleInput, { target: { value: 'testTitle' } });
    fireEvent.change(descriptionInput, { target: { value: 'testDescription' } });

    expect(titleInput.value).toBe('testTitle');
    expect(descriptionInput.value).toBe('testDescription');
  });

  test('TaskForm calls onSubmit with correct data on form submission', () => {
    const onSubmitMock = jest.fn();
    const { getByLabelText, getByText } = render(<TaskForm onSubmit={onSubmitMock} />);
    const titleInput = getByLabelText('Title');
    const descriptionInput = getByLabelText('Description');
    const submitButton = getByText('Add Task');

    fireEvent.change(titleInput, { target: { value: 'testTitle' } });
    fireEvent.change(descriptionInput, { target: { value: 'testDescription' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith({
      title: 'testTitle',
      description: 'testDescription',
    });
  });
});
