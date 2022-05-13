import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup.string().required('please enter your name'),
  affiliation: yup.string().optional(),
  email: yup.string().required('please enter your email'),
  phone: yup.string().optional(),
  subject: yup.string().required('please enter a subject'),
  formMessage: yup.string().required('please enter your message'),
});
