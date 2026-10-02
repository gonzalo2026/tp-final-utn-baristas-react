import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  motivo: '',
  'contact-preference': 'email',
  message: '',
  newsletter: false,
};

function useContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    console.log(`Campo modificado: ${name} ->`, nextValue);

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    console.log('Formulario reseteado');
    setFormData(initialState);
    setSubmitted(false);
  };

  return { formData, submitted, handleChange, handleSubmit, handleReset };
}

export default useContactForm;
