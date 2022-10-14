import {useEffect, useRef} from 'react'
import {Dropdown, Avatar} from 'flowbite-react'
import useUser from '../../hooks/useUser';

function SignedInUserIcon() {

  const { logOut, settings } = useUser();


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
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          your email here
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Favorite Kanjis</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

export default SignedInUserIcon