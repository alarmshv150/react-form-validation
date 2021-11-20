import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
    country: "canada",
    gender: "Other",
    agree: false,
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((form) => ({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showData = () => {
    console.log("Form:", form);
  };

  const onSubmit = (e) => {
    if (!form.name) {
      setError((error) => ({
        ...error,
        name: "name cannot be blank",
      }));
      return;
    } else {
      setError((error) => ({
        ...error,
        name: "",
      }));
    }

    if (!form.email.includes("@")) {
      setError((error) => ({
        ...error,
        email: "invalid email",
      }));
      return;
    } else {
      setError((error) => ({
        ...error,
        email: "",
      }));
    }

    if (form.password.length < 6) {
      setError((error) => ({
        ...error,
        password: "password is too short",
      }));
      return;
    } else {
      setError((error) => ({
        ...error,
        password: "",
      }));
    }

    showData();
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={form.name}
            placeholder="name"
            autoFocus
            maxLength={12}
            onChange={onChange}
          />
        </label>
        {!!error.name && (
          <div>
            <i style={{ fontSize: 18, color: "red" }}>{error.name}</i>
          </div>
        )}

        <hr />

        <label>
          Email:
          <input
            name="email"
            value={form.email}
            placeholder="email"
            required
            onChange={onChange}
          />
        </label>
        {!!error.email && (
          <div>
            <i style={{ fontSize: 18, color: "red" }}>{error.email}</i>
          </div>
        )}

        <hr />

        <label>
          Password:
          <input
            name="password"
            value={form.password}
            placeholder="password"
            required
            onChange={onChange}
          />
        </label>
        {!!error.password && (
          <div>
            <i style={{ fontSize: 18, color: "red" }}>{error.password}</i>
          </div>
        )}

        <hr />

        <label>
          Description:
          <textarea
            name="description"
            value={form.description}
            placeholder="description"
            rows={10}
            cols={20}
            maxLength={500}
            onChange={onChange}
          />
        </label>

        <hr />

        <label>
          Country:
          <select name="country" value={form.country} onChange={onChange}>
            <option value="canada">Canada</option>
            <option value="u.s.a">U.S.A</option>
            <option value="ukraine">Ukraine</option>
          </select>
        </label>

        <hr />

        <label>
          Gender:
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={onChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Femail"
              checked={form.gender === "Femail"}
              onChange={onChange}
            />
            Femail
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={form.gender === "Other"}
              onChange={onChange}
            />
            Other
          </div>
        </label>

        <hr />

        <label>
          Agree:
          <input
            type="checkbox"
            name="agree"
            value={form.agree}
            onChange={onChange}
          />
        </label>

        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
