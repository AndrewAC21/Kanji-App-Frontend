import { useState } from "react";
import { Avatar } from "flowbite-react";
import SignInModal from "../../modals/SignInModal";
import SignUpModal from "../../modals/SignUpModal";

export default function NotLoggedInUserIcon() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setShowSignInModal(true)}>
        <Avatar alt="User settings" rounded={true} />
      </div>
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
        setShowSignUpModal={setShowSignUpModal}
      />
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
        setShowSignInModal={setShowSignInModal}
      />
    </>
  );
}
