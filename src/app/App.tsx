import NavBar from './components/common/NavBar/NavBar';
import {
  SectionAbout,
  SectionContact,
  SectionExperience,
  SectionIntro,
  SectionProjects,
} from './components/common/sections';

function App() {
  return (
    <div>
      <NavBar />
      <SectionIntro />
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
      <SectionContact />
    </div>
  );
}

export default App;
