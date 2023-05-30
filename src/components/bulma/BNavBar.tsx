import { ReactNode } from "react"

export type BNavBarProps = {
  className?: string;
  navbarBrand?: ReactNode;
  navbarStart?: ReactNode;
  navbarEnd?: ReactNode;
}

export default function BNavBar (props: BNavBarProps) {
  return (
    <div className={`navbar ${props.className || ""}`}>
      <div className="container">
        <div className="navbar-brand">
          { typeof props.navbarBrand !== 'undefined' && props.navbarBrand }

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            { typeof props.navbarStart && props.navbarStart }
          </div>

          <div className="navbar-end">
            { typeof props.navbarEnd && props.navbarEnd }
          </div>
        </div>
      </div>
    </div>
  );
}
