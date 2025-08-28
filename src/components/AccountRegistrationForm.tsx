import InputField from "./InputField";
import { useState } from "react";
import "../css/accountregistrationform.css";

export default function AccountRegistrationForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form>
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

      <button type="submit">Register</button>
    </form>
  );
}
