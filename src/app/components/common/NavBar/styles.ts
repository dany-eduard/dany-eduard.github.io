export const ContainerStyles = `
  width: 100%;
  height: 70px;
  background-color: var(--transparent-color);
  z-index: 1;
  box-shadow: 2px 3px 12px #999;
`;

export const WrapperStyles = `
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto 3rem;
`;

export const LogoStyles = `
margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: var(--primary-fonts);

  & > img {
    width: 100%;
    height: 70px;
  }
`;

export const MenuStyles = ``;

export const MenuItemStyles = `
height: 100%;

  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`;

export const MenuItemLinkStyles = `
display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  color: var(--primary-color);
  font-family: var(--primary-fonts);
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
    transition: 1s all ease;
  }

  &.btn_resume {
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid;
    padding: 0.75rem 1rem;
    margin: 0.5rem;

    &:hover {
      background-color: var(--secondary-color-transparent);
    }
  }

  @media (max-width: 960px) {
    // width: 16%;
  }
`;

export const MobileIconStyles = ``;
