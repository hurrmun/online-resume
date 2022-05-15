import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .max(100, 'this field cannot exceed 100 characters')
    .required('please enter your name'),
  affiliation: yup
    .string()
    .max(100, 'this field cannot exceed 100 characters')
    .optional(),
  email: yup
    .string()
    .email('please enter a valid email')
    .max(100, 'this field cannot exceed 100 characters')
    .required('please enter your email'),
  phone: yup
    .string()
    .max(100, 'this field cannot exceed 100 characters')
    .optional(),
  subject: yup
    .string()
    .max(100, 'this field cannot exceed 100 characters')
    .required('please enter a subject'),
  formMessage: yup
    .string()
    .max(500, 'this field cannot exceed 500 characters')
    .required('please enter your message'),
});
