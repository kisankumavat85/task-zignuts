import moment from "moment";

const Invitation = ({ invite }) => {
  return (
    <div
      key={invite.invite_id}
      className="invitation-card"
      style={{
        backgroundColor: invite.status === "read" ? "#faebd7" : "#f9cc91",
      }}
    >
      <div className="sender-date">
        <h3>{invite.sender_id}</h3>
        <p>{moment(invite.invite_time).format("MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
      <div>{invite.invite}</div>
      <p className="status">{invite.status === "read" ? "Read" : "Unread"}</p>
    </div>
  );
};

export default Invitation;
