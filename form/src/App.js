import { Form, Field } from 'react-final-form'
import './App.css';

const MyForm = () => {
  const onSubmit = (e) => {
    console.log(e.firstName);
  }

  const validate = (e) => {

  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Simple Default Input</h2>
          <div className='field'>
            <label>First Name</label>
            <Field name="firstName" component="input" placeholder="First Name" />
          </div>

          <div className="field">
            <label>Bio:</label>
            <Field
              name="bio"
              render={({ input, meta }) => (
                <div>
                  <textarea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
          </div>
          <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
      )}
    />
  )
}

export default MyForm;
