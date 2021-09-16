import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import '../App.css'

const Login = (props) => {

  const userContext = useContext(UserContext);
  const { registerUser } = userContext;
  const [userData, setUserData] = useState({
    userName: '',
    category: '',
    difficulty: ''
  });

  const { userName, category, difficulty } = userData;
  const onSubmit = e => {
    e.preventDefault();
    registerUser(userData);
    props.history.push('/questions');
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  return (
    <div class="card">
      <div class="card-body">
        <div class="card-header">
          <h5 className="container-form-title">Who wants to be millionaire</h5>
        </div>
        <form className="container-form-gamer" onSubmit={onSubmit}>
          <div class="mb-3">
            <label for="userName" class="form-label">User Name *</label>
            <input id="userName" required name="userName" class="form-control" value={userName} onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label>Category: * </label>
            <select name="category" required="true" onChange={handleChange} value={category} class="form-select">
              <option selected value="">Select Category</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="22">Geography</option>
              <option value="27">Animals</option>
              <option value="24">Politics</option>
            </select>
          </div>
          <div class="mb-3">
            <label>Difficulty: * </label>
            <select name="difficulty" required onChange={handleChange} value={difficulty} class="form-select">
              <option selected value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div class="d-grid gap-2">
          <button type="submit" name="ingresar" class="btn btn-success btn-lg">Start</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;
