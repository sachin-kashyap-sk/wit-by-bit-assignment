import AddModal from "./Components/AddModal";
import LeftSection from "./Components/LeftSection";
import RemoveModal from "./Components/RemoveModal";
import RightSection from "./Components/RightSection";

function App() {
  return (
    <div className="parent">
      <LeftSection />
      <RightSection />
      <AddModal />
      <RemoveModal />
    </div>
  );
}

export default App;
