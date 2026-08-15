import React from "react";
import TextField from "../../../components/TextField/TextField";
import { useForm } from "react-hook-form";
import "./styles/register-form.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterForm() {
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: 24,
    boxSizing: "border-box",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 460,
    background: "#FFFFFF",
    borderRadius: 16,
    padding: "36px 40px 40px",
    boxShadow: "0 30px 60px -20px rgba(0, 0, 0, 0.35)",
    boxSizing: "border-box",
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 20,
    marginBottom: 24,
    borderBottom: "1px solid #E5E7EB",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 28,
    fontWeight: 700,
    color: "#111827",
    margin: 0,
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "13px 0",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 700,
    border: "none",
    borderRadius: 8,
    transition: "background 0.15s ease",
  };
  const schema = z
    .object({
      login: z.string().min(2).max(20),
      password: z
        .string()
        .min(5, "min lenght is 5")
        .max(20, "max lenght is 20"),
      confirmPassword: z
        .string()
        .min(5, "min lenght is 5")
        .max(20, "max lenght is 20"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "password do not match",
      path: ["confirmPassword"],
    });
  type Inputs = z.infer<typeof schema>;

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submitData = (data: Inputs) => {
    console.log("New user:", data);

    reset();
  };
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          {/* person icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#111827">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4.418 3.582-7 8-7s8 2.582 8 7v1H4v-1z" />
          </svg>
          <h1 style={titleStyle}>Register</h1>
        </div>

        <form onSubmit={handleSubmit(submitData)}>
          <TextField
            label="Username"
            placeholder="Enter Username..."
            {...register("login")}
          />

          <TextField
            label="Password"
            type="password"
            placeholder="Enter Password..."
            {...register("password")}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter Password..."
            {...register("confirmPassword")}
          />
          <button type="submit" style={buttonStyle}>
            {/* login/arrow icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
            >
              <path
                d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 17l5-5-5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M15 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
