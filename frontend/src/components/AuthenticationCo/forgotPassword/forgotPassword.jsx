import { useContext, useState } from "react";
import { UserContext } from "../../../Context/User";

function ForgotPassword() {
  const [formData, setFormData] = useState();
  const { forgotPasswordHandler } = useContext(UserContext);
  const [isOk, setIsOk] = useState(true);
  const [didSendMail, setDidSendmMail] = useState(false);
  const changeHandler = (e) => {
    setFormData(e.target.value);
    console.log(formData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const didSend = await forgotPasswordHandler(formData);
    setIsOk(didSend);
    setDidSendmMail(didSend);
  };
  return (
    <div>
      {didSendMail ? (
        <div>A password renewal request has been sent to the email</div>
      ) : (
        <form>
          <div>
            <label htmlFor="userEmailInput">
              Password recovery email:
              {isOk === false && <span> The email does not exist</span>}
            </label>

            <input
              onChange={changeHandler}
              type="email"
              name="email"
              id="userEmailInput"
              required
            />
          </div>
          <button onClick={submitHandler}> send</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
