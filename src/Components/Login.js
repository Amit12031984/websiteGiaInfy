import React from "react";

export default function Login() {
  return (
    <div className=" m-5 d-flex justify-content-center align-items-center">
      <form class="form-signin">
        {/* <h3 class="m-5 text-primary">Gramarshi Academy International School </h3> <br /> */}
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />{" "}
        <br />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
      </form>
    </div>
  );
}
