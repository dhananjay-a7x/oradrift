import { useState } from 'react';

const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e, submitCallback) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await submitCallback(values);
        setValues(initialState);
      } catch (error) {
        setErrors({ submit: error.message });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return { values, errors, isSubmitting, handleChange, handleSubmit };
};

export default useForm;