import "./styles.css";
import profile from "./images/profile.png";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <img src={profile} alt="profile.png" />
      <Main />
      <Footer />
    </div>
  );
}
