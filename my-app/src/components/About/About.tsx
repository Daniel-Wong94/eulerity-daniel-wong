import {
  StyledAboutContainer,
  StyledHeader,
  StyledLinksContainer,
} from "./About.styles";

const About = () => {
  return (
    <>
      <StyledHeader>About Me</StyledHeader>
      <StyledAboutContainer>
        <img
          src="https://www.danielwong.io/static/media/Headshot.6935ef85d30cc758f294.png"
          height={300}
        />
        <p>
          My name is Daniel Wong and I'm an MRI Specialist turned Software
          Engineer! My professional background has been in healthcare as an MRI
          Specialist for over six years. I made the pivotal decision in my
          career to switch over to the technology sector when I was assisting in
          Facebook's fastMRI project. I was able to witness the capabilities of
          ML/AI in improving healthcare workflow and overall patient experience
          and decided that I wanted to be a part of building innovative
          technologies.
          <StyledLinksContainer>
            <a href="https://www.linkedin.com/in/daniel-kachun-wong/">
              LinkedIn
            </a>
            <a href="https://github.com/Daniel-Wong94">Github</a>
            <a href="https://danielwong.io">Portfolio I built in React</a>
          </StyledLinksContainer>
        </p>
      </StyledAboutContainer>
    </>
  );
};

export default About;
