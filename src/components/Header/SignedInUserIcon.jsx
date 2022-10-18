import { useContext, useRef, useEffect, useState, useCallback } from "react";
import { Dropdown, Avatar } from "flowbite-react";
import useUser from "../../hooks/useUser";
import { UserContext } from "../../context/UserContext";

function SignedInUserIcon() {
  const { isLoggedIn } = useContext(UserContext);
  const { logOut, settings } = useUser();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  useEffect(
    useCallback(() => {
      async function fetchSettings() {
        if (isLoggedIn) {
          const { data } = await settings();
          console.log(emailInputRef);
          emailInputRef.current.value = data.email;
          setUsername(data.fullName);
        }
      }
      fetchSettings();
    }, [emailInputRef, username]),
    []
  );

  const changeSettings = () => {
    console.log("change setting");
    emailInputRef.current.disabled = false;
    nameInputRef.current.disabled = false;
    passwordInputRef.current.classList.remove("hidden");
  };

  const submitSettings = () => {
    console.log("submit settings");
  };

  return (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
        />
      }
    >
      <Dropdown.Header>
        <form onSubmit={submitSettings}>
          <input
            disabled
            className="block text-sm mb-2 bg-slate-200 disabled:bg-transparent"
            value={username}
            ref={nameInputRef}
          />
          <input
            disabled
            className="block truncate text-sm font-medium bg-slate-200 mb-2 disabled:bg-transparent "
            ref={emailInputRef}
          />
          <input
            className="hidden truncate text-sm font-medium bg-slate-200  "
            ref={passwordInputRef}
            placeholder="Change your password"
            //TODO include input types and fix the default styles of each input type
          />
        </form>
      </Dropdown.Header>
      <Dropdown.Item>
        <span onClick={changeSettings}>Change settings</span>
      </Dropdown.Item>
      <Dropdown.Item>Favorite Kanjis</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default SignedInUserIcon;
