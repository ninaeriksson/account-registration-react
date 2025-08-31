import InputField from "./InputField";
import { useState } from "react";
import "../css/accountregistrationform.css";

export default function AccountRegistrationForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // validering
  const isPasswordValid = password.length >= 8;
  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const isFormValid =
    name && username && email && isPasswordValid && passwordsMatch;

  let errorMessage = null;

  if (!isPasswordValid && password.length > 0) {
    errorMessage = <p>Password must be at least 8 characters</p>;
  } else if (!passwordsMatch && confirmPassword.length > 0) {
    errorMessage = <p>Passwords do not match</p>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const registrationData = {
      name,
      username,
      email,
      password,
    };

    console.log(registrationData);

    // rensa fälten
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Registration</h2>

      <InputField label="Name" value={name} onChange={setName} />
      <InputField label="Username" value={username} onChange={setUsername} />
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <InputField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
      />

      {errorMessage}

      <button type="submit" disabled={!isFormValid}>
        Register
      </button>
    </form>
  );
}
