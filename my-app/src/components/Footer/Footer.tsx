import { StyledFooterContainer, StyledList } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <div>
        <img src="/logo512.png" alt="logo" height={64} />
        <div>Footer example</div>
      </div>
      <StyledList>
        <span>Content</span>
        <ul>
          <li>Creative</li>
          <li>Video</li>
          <li>Editorial</li>
          <li>Archive</li>
          <li>Custom Content</li>
        </ul>
      </StyledList>
      <StyledList>
        <span>Solutions</span>
        <ul>
          <li>Overview</li>
          <li>Plans and pricing</li>
          <li>Premium Access</li>
          <li>Assignments</li>
        </ul>
      </StyledList>
      <StyledList>
        <span>Tools & Services</span>
        <ul>
          <li>Media Manager</li>
          <li>Rights and Clearance</li>
          <li>Plugins and extensions</li>
          <li>Creative Insights</li>
        </ul>
      </StyledList>
      <StyledList>
        <span>Company</span>
        <ul>
          <li>About us</li>
          <li>Corporate responsibility</li>
          <li>Careers</li>
          <li>Newsroom</li>
        </ul>
      </StyledList>
    </StyledFooterContainer>
  );
};

export default Footer;
