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
        <label class="form-control">
          Name:
          <input
            name="name"
            type="text"
            value={form.name}
            placeholder="name"
            autoFocus
            maxLength={12}
            onChange={onChange}
            class="form-control"
          />
        </label>
        {!!error.name && (
          <div>
            <i style={{ fontSize: 18, color: "red" }}>{error.name}</i>
          </div>
        )}

        <hr style={{ color: "darkcyan", height: "3px" }} />

        <label class="form-control">
          Email:
          <input
            name="email"
            type="email"
            value={form.email}
            placeholder="email"
            required
            onChange={onChange}
            class="form-control"
          />
        </label>
        {!!error.email && (
          <div>
            <i style={{ fontSize: 18, color: "red" }}>{error.email}</i>
          </div>
        )}

        <hr style={{ color: "darkcyan", height: "3px" }} />

        <label class="form-control">
          Password:
          <input
            name="password"
            type="password"
            value={form.password}
            placeholder="password"
            required
            onChange={onChange}
            class="form-control"
          />
        </label>
        {!!error.password && (
          <div>
            <i style={{ fontSize: 18, color: "red" }}>{error.password}</i>
          </div>
        )}

        <hr style={{ color: "darkcyan", height: "3px" }} />

        <label class="form-control">
          Description:
          <textarea
            name="description"
            type="text"
            value={form.description}
            placeholder="description"
            rows={10}
            cols={20}
            maxLength={500}
            onChange={onChange}
            class="form-control"
          />
        </label>

        <hr style={{ color: "darkcyan", height: "3px" }} />

        <label class="form-control">
          Country:
          <select
            name="country"
            value={form.country}
            onChange={onChange}
            class="form-select"
          >
            <option value="canada">Canada</option>
            <option value="u.s.a">U.S.A</option>
            <option value="ukraine">Ukraine</option>
          </select>
        </label>

        <hr style={{ color: "darkcyan", height: "3px" }} />

        <label class="form-control">
          Gender:
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={onChange}
              class="form-check-input"
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Femail"
              checked={form.gender === "Femail"}
              onChange={onChange}
              class="form-check-input"
            />
            Femail
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={form.gender === "Other"}
              onChange={onChange}
              class="form-check-input"
            />
            Other
          </div>
        </label>

        <hr style={{ color: "darkcyan", height: "3px" }} />

        <label class="form-control">
          Agree:
          <input
            type="checkbox"
            name="agree"
            value={form.agree}
            onChange={onChange}
            class="form-check"
          />
        </label>

        <hr style={{ color: "darkcyan", height: "3px" }} />

        <div>
          <button type="buton" class="btn btn-success">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
