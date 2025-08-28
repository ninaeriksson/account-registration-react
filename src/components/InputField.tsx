import "../css/inputfield.css";

type InputFieldProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="input-field">
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </label>
    </div>
  );
}
