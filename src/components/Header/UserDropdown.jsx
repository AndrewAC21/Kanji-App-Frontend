import { useContext } from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { UserContext } from "../../context/UserContext";
import NotLoggedInUserIcon from "./NotLoggedInUserIcon";
export default function () {
  const { isLoggedIn } = useContext(UserContext);

  return !isLoggedIn ? (
    <NotLoggedInUserIcon />
  ) : (
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
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Favorite Kanjis</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
