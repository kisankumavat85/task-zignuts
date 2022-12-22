import Invitation from "./Invitation";
import "../styles/components/invitations.css";

const Invitations = (props) => {
  const { invites } = props;
  return (
    <div className="invitations-container">
      <div className="invitations">
        {invites.map((invite) => (
          <Invitation key={invite.invite_id} invite={invite} />
        ))}
      </div>
    </div>
  );
};

export default Invitations;
