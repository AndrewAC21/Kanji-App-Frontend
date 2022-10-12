import { useState } from "react";
import { Button, Modal, TextInput, Checkbox, Label } from "flowbite-react";
import useUser from "../hooks/useUser";
import { useRef } from "react";

export default function SignInModal({ isOpen, onClose }) {
  const { logIn } = useUser();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onChange = (e) => {
    //console.log(e.target.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <>
      <Button onClick={toggleModal}>Toggle modal</Button>
      <Modal show={showModal} size="md" popup={true} onClose={toggleModal}>
        <Modal.Header />
        <Modal.Body>
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
                ref={emailRef}
                onChange={onChange}
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
                ref={passwordRef}
                onChange={onChange}
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
              <Button>Log in to your account</Button>
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
        </Modal.Body>
      </Modal>
    </>
  );
}
