import { Avatar } from "flowbite-react";
import SignInModal from "../../modals/SignInModal";

export default function NotLoggedInUserIcon() {
  return (
    <>
      <Avatar alt="User settings" rounded={true} />
      <SignInModal />
    </>
  );
}
