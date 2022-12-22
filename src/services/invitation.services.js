import invitationData from "../json/invitations.json";
import invitationUpdateData from "../json/invitations_update.json";

export const getAllInvitations = (arr) =>
  arr.invites.sort((a, b) => {
    if (a.invite_time > b.invite_time) {
      return -1;
    }
    if (a.invite_time < b.invite_time) {
      return 1;
    }
    return 0;
  });

export const getInvitationByUserId = (userId) =>
  getAllInvitations(invitationData).filter(
    (invite) => invite.user_id.toString() === userId.toString()
  );

export const getNewInvitationsByUserId = (userId) =>
  getAllInvitations(invitationUpdateData).filter(
    (invite) => invite.user_id.toString() === userId.toString()
  );
