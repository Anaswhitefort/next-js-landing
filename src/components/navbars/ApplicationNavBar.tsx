import { routes } from "@/app/routes";
import UserNavBar, { UserNavBarProps } from "./UserNavBar";
import GuestNavBar from "./GuestNavBar";

type ApplicationNavBarProps = {} & UserNavBarProps;

export default function ApplicationNavBar (props: ApplicationNavBarProps) {
  const navbarBrand = (
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>
  );

  return (
    props.user ? <UserNavBar navbarBrand={navbarBrand} user={undefined} /> : <GuestNavBar navbarBrand={navbarBrand} />
  );
}

