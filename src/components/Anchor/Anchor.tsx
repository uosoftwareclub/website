import styled from "@emotion/styled";

interface LinkThemeProp {
  theme: {
    colors: {
      accent: string;
    },
    colorModeTransition: string;
  }
}

const Anchor = styled('a')`
  transition: ${p => p.theme.colorModeTransition};
  color: ${(p: LinkThemeProp) => p.theme.colors.accent};

  &:visited {
    color: ${(p: LinkThemeProp) => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default Anchor;
