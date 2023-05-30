import UserNavBar, { UserNavBarProps } from "./UserNavBar";
import GuestNavBar from "./GuestNavBar";
import { User } from "@/app/user";
import { routes } from "@/app/routes";

type ApplicationNavBarProps = {
  user?: User | null
} 

export default function ApplicationNavBar (props: ApplicationNavBarProps) {
  const navbarBrand = (
    <a className="navbar-item" href={routes.landing.url}>
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>
  );

  return (
    props.user ? <UserNavBar navbarBrand={navbarBrand} user={props.user} /> : <GuestNavBar navbarBrand={navbarBrand} />
  );
}

