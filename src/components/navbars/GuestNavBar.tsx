import { routes } from "@/app/routes";
import BNavBar, { BNavBarProps } from "@/components/bulma/BNavBar";

type GuestNavBarProps = {} & Pick<BNavBarProps, "navbarBrand">;

export default function GuestNavBar(props: GuestNavBarProps) {
  const navbarStart = (
    <>
      {/*
      <a className="navbar-item">
        Optional Page 1
      </a>
      */}
    </>
  );

  const navbarEnd = (
    <a href={routes.login.url} className="navbar-item">
        { "Login" }
    </a>
  );

  return (
    <BNavBar className="is-primary" navbarBrand={props.navbarBrand} navbarStart={navbarStart} navbarEnd={navbarEnd} />
  );
}
