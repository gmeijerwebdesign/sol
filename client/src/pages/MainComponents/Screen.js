import Dashboard from "../dashboard/dashboard";
import Chats from "../chats/chats";
import AI from "../ai/AI";
import Email from "../email/email";
import Note from "../notes/note";
import Scrum from "../scrum/scrum";
import Chat from "../chats/chat";

function ScreenLoader({ navClick, setNavClick }) {
  return (
    <>
      {navClick.screen === "dashboard" && <Dashboard />}
      {navClick.screen === "chats" && <Chats setNavClick={setNavClick} />}
      {navClick.screen === "chat" && <Chat navClick={navClick} />}
      {navClick.screen === "ai" && <AI />}
      {navClick.screen === "email" && <Email />}
      {navClick.screen === "notes" && <Note />}
      {navClick.screen === "email" && <Email />}
      {navClick.screen === "scrum" && <Scrum />}
    </>
  );
}

export default ScreenLoader;
