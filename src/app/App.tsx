import NavBar from './components/common/NavBar';
import {
  ContactBottons,
  SectionAbout,
  SectionContact,
  SectionExperience,
  SectionIntro,
  SectionProjects,
} from './components/common/sections';
import { ContactBottonsLayout, Layout, Main, NavBarLayout } from './components/layouts';

function App() {
  return (
    <Layout>
      <NavBarLayout>
        <NavBar />
      </NavBarLayout>
      <Main>
        <SectionIntro />
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <SectionContact />
      </Main>
      <ContactBottonsLayout>
        <ContactBottons />
      </ContactBottonsLayout>
    </Layout>
  );
}

export default App;
