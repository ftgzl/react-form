import './App.css';
import { useFormik } from 'formik';

function App() {
  const {handleChange, handleSubmit, values} = useFormik({
    initialValues: {
      firstName: 'Fuat',
      lastName: 'Güzel',
      email: 'fuatguzel754@gmail.com',
      gender:'male',
      hobbies: [],
      country: 'Turkey',
    },
    onSubmit:values => {
      console.log(values);
    },
  })
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" onChange={handleChange} value={values.firstName}/>
        <br /><br />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" onChange={handleChange} value={values.lastName}/>
        <br /><br />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        <br /><br />
        <span>Female</span>
        <input type="radio" name="gender" onChange={handleChange} value="female" checked={values.gender === "female"}/>
        <span>Male</span>
        <input type="radio" name="gender" onChange={handleChange} value="male" checked={values.gender === "male"}/>
        <br /><br />
        <div>
          <input type="checkbox" name="hobies" onChange={handleChange} values="Tennis"/><span>Tennis</span>
          <br />
          <input type="checkbox" name="hobies" onChange={handleChange} values="Running"/><span>Running</span>
          <br />
          <input type="checkbox" name="hobies" onChange={handleChange} values="Swimming"/><span>Swimming</span>
        </div>
        <br />
        <select name="country" onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="usa">USA</option>
        </select>

        <br /><br />
        <button type="submit">Submit</button>

        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default App;
