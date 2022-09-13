import { Form, Field } from 'react-final-form'
import './App.css';

const MyForm = () => {
  const onSubmit = (e) => {
    console.log(e.firstName + ' ' + e.bio);
  }

  const validate = (e) => {
    const errors = {};
    const regex = /^[a-zA-Z]+$/;

    if (e.bio && e.bio.length <= 10) {
      errors.bio = "The length of description must be more than 2 characters.";
    }
    if (!regex.test(e.secondName)) {
      errors.secondName = 'Please enter secondname';
    }
    return errors;
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={{ bio: 'It is awesome' }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Simple Default Input</h2>
          <div className='field'>
            <label>First Name</label>
            <Field name="firstName" component="input" placeholder="First Name" />
          </div>

          <div className="field">
            <Field name="secondName">
              {({ input, meta }) => (
                <div>
                  <label>Last Name</label>
                  <input type="text" placeholder='second name' {...input} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
              )}
            </Field>
          </div>

          <div className="field">
            <Field
              name="bio"
              render={({ input, meta }) => (
                <div>
                  <label>Bio</label>
                  <textarea {...input} />
                  {meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
              )}
            />
          </div>

          <button type="submit">Submit</button>
        </form >
      )}
    />
  )
}

export default MyForm;
