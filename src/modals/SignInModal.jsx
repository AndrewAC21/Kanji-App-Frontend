import { useState } from "react";
import { Button, Modal, TextInput, Label, Alert } from "flowbite-react";
import useUser from "../hooks/useUser";
import { UserContext } from "../context/UserContext";

export default function SignInModal() {
  const { logIn } = useUser();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(error, "1");
    setError(false);
    console.log(error, "2");
    try {
      const fetchLogin = await logIn({
        email,
        password,
      });
      return fetchLogin;
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <Button onClick={toggleModal}>Toggle modal</Button>
      <Modal show={showModal} size="md" popup={true} onClose={toggleModal}>
        <Modal.Header />
        {error && (
          <Alert color="failure">
            <span>
              <span className="font-medium">Please Check!</span> The email or
              the password is incorrect.
            </span>
          </Alert>
        )}
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <a
                  href="/modal"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button type="submit">Log in to your account</Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="/modal"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
