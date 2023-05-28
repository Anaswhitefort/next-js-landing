import { routes } from "@/app/routes";
import { User } from "@/app/user";
import BNavBar, { BNavBarProps } from "@/components/bulma/BNavBar";

export type UserNavBarProps = {
  user: User
} & Pick<BNavBarProps, "navbarBrand"> 

export default function UserNavBar(props: UserNavBarProps) {
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
        { props.user.name }
      </a>

      <div className="navbar-dropdown">
        <a className="navbar-item" href={routes.profile.url}>
          { "My Profile" }
        </a>
      </div>
    </div>
  )
  return (
    <BNavBar className="is-primary" navbarBrand={props.navbarBrand} navbarStart={navbarStart} navbarEnd={navbarEnd} />
  );
}
