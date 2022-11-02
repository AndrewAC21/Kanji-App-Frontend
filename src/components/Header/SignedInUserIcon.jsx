import { useContext, useRef, useEffect, useState, useCallback } from "react";
import { Dropdown, Avatar, Button } from "flowbite-react";
import axios from "axios";
import useUser from "../../hooks/useUser";
import { UserContext } from "../../context/UserContext";
import FavKanjisModal from "../../modals/FavKanjisModal";
function SignedInUserIcon() {
  const { isLoggedIn, jwt } = useContext(UserContext);
  const { logOut, settings } = useUser();
  const [showSettings, setShowSettings] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const formDivRef = useRef();

  const [showFavKanjisModal, setShowFavKanjisModal] = useState(false);
  useEffect(
    useCallback(() => {
      async function fetchSettings() {
        if (isLoggedIn) {
          const { data } = await settings();
          emailInputRef.current.value = data.email;
          nameInputRef.current.value = data.fullName;
        }
      }
      fetchSettings();
    }, [emailInputRef, nameInputRef]),
    []
  );

  const toggleShowSettings = () => {
    console.log(showSettings);
    setShowSettings(!showSettings);
    if (!showSettings) {
      emailInputRef.current.disabled = true;
      nameInputRef.current.disabled = true;
      formDivRef.current.classList.add("hidden");
      setShowSettings(!showSettings);
      return;
    }
    emailInputRef.current.disabled = false;
    nameInputRef.current.disabled = false;
    formDivRef.current.classList.remove("hidden");
  };

  const instance = axios.create({
    baseURL: "https://kanji-app.up.railway.app",
    headers: { Authorization: `Bearer ${jwt}` },
  });
  const submitSettings = async (e) => {
    e.preventDefault();
    try {
      //TODO create 8-character password validation
      let response = await instance.put("profile/settings", {
        fullName: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      toggleShowSettings(!showSettings);
    } catch (e) {
      console.log(e);
    }
  };
  //Todo create success & error states to trigger form error messages
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
            ref={nameInputRef}
          />
          <input
            disabled
            className="block truncate text-sm font-medium bg-slate-200 mb-2 disabled:bg-transparent "
            ref={emailInputRef}
          />

          <div className="hidden" ref={formDivRef}>
            <input
              className="truncate mb-2 text-sm font-medium bg-slate-200  "
              ref={passwordInputRef}
              placeholder="Change your password"
              //TODO include input types and fix the default styles of each input type
            />
            <div className="flex justify-evenly">
              <Button color="failure" size="xs" onClick={toggleShowSettings}>
                Cancel
              </Button>
              <Button type="submit" size="xs">
                Save
              </Button>
            </div>
          </div>
        </form>
      </Dropdown.Header>
      <Dropdown.Item onClick={toggleShowSettings}>
        <span>Change settings</span>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setShowFavKanjisModal(true)}>
        Favorite Kanjis
      </Dropdown.Item>
      <FavKanjisModal
        setShowFavKanjisModal={setShowFavKanjisModal}
        showFavKanjisModal={showFavKanjisModal}
      />
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default SignedInUserIcon;
