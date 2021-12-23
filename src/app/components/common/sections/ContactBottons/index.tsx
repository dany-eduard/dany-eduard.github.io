import styled from 'styled-components';
import GitHubIcon from '../../../../../assets/icons/github.svg';
import GmailIcon from '../../../../../assets/icons/gmail.svg';
import LinkedInIcon from '../../../../../assets/icons/linkedin.svg';
import TwitterIcon from '../../../../../assets/icons/twitter.svg';
import WhatsAppIcon from '../../../../../assets/icons/whatsapp.svg';

const WrapperButtons = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.5s ease;
  min-height: 87vh;

  @media (max-width: 960px) {
    flex-flow: row nowrap;
    justify-content: center;
    gap: 1rem;
    min-height: 5vh;
  }
`;

const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: end;
  justify-content: flex-end;
  gap: 0.5rem;
  transition: all 0.5s ease;
  list-style: none;
  cursor: pointer;

  @media (max-width: 960px) {
    flex-flow: row nowrap;
  }
`;

const ListItem = styled.li`
  > a {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
      transition: 1s all ease;
    }

    @media (max-width: 960px) {
      padding: 0.5rem 0.5rem;
    }
  }
`;

const Imagen = styled.img`
  width: 2.2rem;
  filter: brightness(1.1);
  mix-blend-mode: multiply;

  &:hover {
    // box-shadow: 1px 12px 15px 3px rgba(0, 0, 0, 0.52);
    transition: 1s all ease;
  }
`;

const ContactBottons = () => {
  return (
    <WrapperButtons>
      <List>
        <ListItem>
          <a href="https://github.com/dany-eduard" target="_blank" rel="noopener noreferrer">
            <Imagen src={GitHubIcon} alt="GitHub" />
          </a>
        </ListItem>
        <ListItem>
          <a href="mailto:danyeduard17@gmail.com" target="_blank" rel="noopener noreferrer">
            <Imagen src={GmailIcon} alt="Gmail" />
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.linkedin.com/in/dany-eduard/"
            target="_blank"
            rel="noopener noreferrer">
            <Imagen src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://twitter.com/dany_eduard17" target="_blank" rel="noopener noreferrer">
            <Imagen src={TwitterIcon} alt="Twitter" />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://wa.link/1bdf5b" target="_blank" rel="noopener noreferrer">
            <Imagen src={WhatsAppIcon} alt="WhatsApp" />
          </a>
        </ListItem>
      </List>
    </WrapperButtons>
  );
};

export default ContactBottons;
