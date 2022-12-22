import { useContext, useEffect, useState } from "react";

import AuthContext from "../contexts/auth-context";
import Header from "../components/Header";
import Invitations from "../components/Invitations";
import {
  getInvitationByUserId,
  getNewInvitationsByUserId,
} from "../services/invitation.services";

const Home = () => {
  const context = useContext(AuthContext);
  const { first_name, last_name, user_id } = context.user;
  const [invites, setInvites] = useState([]);
  const [newInvites, setNewInvites] = useState([]);

  const onLogoutClick = () => {
    context.setUser(null);
  };

  useEffect(() => {
    if (user_id) {
      const invites = getInvitationByUserId(user_id);
      setInvites(invites);
      const newInvites = getNewInvitationsByUserId(user_id);
      setNewInvites(newInvites);
    }
  }, [user_id]);

  useEffect(() => {
    let timer;
    if (newInvites.length) {
      timer = setTimeout(() => {
        const newInvitesCopy = [...newInvites];
        const popedInvite = newInvitesCopy.pop();
        setInvites((ps) => [...ps, popedInvite]);
        setNewInvites(newInvitesCopy);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [newInvites]);

  return (
    <div>
      <Header
        firstName={first_name}
        lastName={last_name}
        onLogoutClick={onLogoutClick}
      />
      <Invitations invites={invites} />
    </div>
  );
};

export default Home;
