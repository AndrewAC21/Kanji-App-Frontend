import { useContext } from "react";
import { Navbar } from "flowbite-react";
import UserDropdown from "./UserDropdown";
import { UserContext } from "../../context/UserContext";

function Header() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 ml-5 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Kanji App
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 mr-6">
        <UserDropdown isLoggedIn={isLoggedIn} />
      </div>
    </Navbar>
  );
}

export default Header;
