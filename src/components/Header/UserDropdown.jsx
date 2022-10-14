import NotLoggedInUserIcon from "./NotLoggedInUserIcon";
import SignedInUserIcon from "./SignedInUserIcon";
export default function UserDropdown({ isLoggedIn }) {
  return !isLoggedIn ? <NotLoggedInUserIcon /> : <SignedInUserIcon />;
}
