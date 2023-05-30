import { Fragment } from "react";
import Menu from "./components/menu";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <header>
        <h1>logo</h1>
        <div>
          <Menu></Menu>
        </div>
      </header>
      {children}
      <footer>@2023-05-20</footer>
    </Fragment>
  );
}
