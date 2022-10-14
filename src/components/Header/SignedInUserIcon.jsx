import { useContext, useEffect, useState, useCallback } from "react";
import { Dropdown, Avatar } from "flowbite-react";
import useUser from "../../hooks/useUser";
import { UserContext } from "../../context/UserContext";

function SignedInUserIcon() {
  const { isLoggedIn } = useContext(UserContext);
  const { logOut, settings } = useUser();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(
    useCallback(() => {
      async function fetchSettings() {
        if (isLoggedIn) {
          const { data } = await settings();
          setEmail(data.email);
          setUsername(data.fullName);
        }
      }
      fetchSettings();
    }, [email, username]),
    []
  );

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
        <span className="block text-sm">{username}</span>
        <span className="block truncate text-sm font-medium">{email}</span>
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Favorite Kanjis</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default SignedInUserIcon;
