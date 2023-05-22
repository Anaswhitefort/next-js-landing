import { routes } from "@/app/routes";
import BNavBar from "../bulma/BNavBar";

export default function ApplicationNavBar () {
  const navbarBrand = (
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>
  );

  const navbarStart = (
    <>
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </>
  );

  const navbarEnd = (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">
        { "My User Name" }
      </a>

      <div className="navbar-dropdown">
        <a className="navbar-item" href={routes.profile.url}>
          { "My Profile" }
        </a>
      </div>
    </div>
  )

  return (
    <BNavBar className="is-primary" navbarBrand={navbarBrand} navbarStart={navbarStart} navbarEnd={navbarEnd} />
  )
}

