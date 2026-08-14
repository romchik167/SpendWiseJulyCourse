import type { ChangeHandler, RefCallBack } from "react-hook-form";

export interface TextFieldProps {
  label: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  name: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
}

export default function TextField({
  label,
  type = "text",
  placeholder,
  name,
  onChange,
  onBlur,
  ref,
}: TextFieldProps) {
  const wrapperStyle: React.CSSProperties = {
    marginBottom: 20,
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 15,
    fontWeight: 500,
    color: "#111827",
    marginBottom: 8,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 14px",
    fontSize: 14,
    color: "#111827",
    background: "#FFFFFF",
    borderRadius: 8,
    outline: "none",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  };

  return (
    <div style={wrapperStyle}>
      <label style={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
}
