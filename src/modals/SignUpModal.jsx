import { useState } from "react";
import { Button, Modal, TextInput, Label, Alert } from "flowbite-react";
import useUser from "../hooks/useUser";
import { UserContext } from "../context/UserContext";

export default function SignUpModal({
  showSignUpModal,
  setShowSignUpModal,
  setShowSignInModal,
}) {
  const { register } = useUser();
  const [error, setError] = useState({ state: false, message: "" });
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const openSignInModal = () => {
    console.log("openSignInModal");
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  const handleSubmit = async (e) => {
    setError({ state: false, message: "" });
    e.preventDefault();

    const fetchRegister = await register({
      fullName,
      email,
      password,
    });
    console.log(fetchRegister);
    console.log(fetchRegister?.data);
    if (fetchRegister.status !== 201) {
      setError({ state: true, message: fetchRegister?.data?.message });
      return;
    }

    setSuccess(true);
  };
  return (
    <>
      <Modal
        show={showSignUpModal}
        size="md"
        popup={true}
        onClose={() => {
          setShowSignUpModal(false);
        }}
      >
        <Modal.Header />
        {error.state && (
          <Alert color="failure">
            <span>
              <span className="font-medium">There was an error!</span>{" "}
              {error.message}
            </span>
          </Alert>
        )}
        {success && (
          <Alert color="success">
            <span>
              <span className="font-medium">Success!</span> Your account has
              been created successfully.
            </span>
          </Alert>
        )}
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Register to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput
                  id="name"
                  placeholder="Awesome User"
                  required={true}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  id="password-register"
                  type="password"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Button type="submit">Register!</Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Have an account already?{" "}
                <a
                  className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
                  onClick={openSignInModal}
                >
                  Log in
                </a>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
