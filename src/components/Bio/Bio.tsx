import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { IAuthor, IColorTheme, IColorThemeProps } from '@types';
import { useThemeUI } from 'theme-ui';

export interface BioProps {
  author: IAuthor
}

const Bio: React.FC<BioProps> = ({ author }) => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <BioContainer>
      <Link
        to={author.slug}
        data-a11y="false"
        aria-label="Author's bio"
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <BioAvatar theme={theme}>
          <BioAvatarInner>
            <RoundedImage src={author.avatar.medium} />
          </BioAvatarInner>
        </BioAvatar>
        <BioText
          theme={theme}
          dangerouslySetInnerHTML={{ __html: author.bio }}
        />
      </Link>
      
    </BioContainer>
  );
};

export default Bio;

const BioContainer = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border: 2px solid ${(p: IColorThemeProps) => p.theme.colors.accent};
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

const BioAvatarInner = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;
  color: ${(p: IColorThemeProps) => p.theme.colors.grey};

  a {
    color: ${(p: IColorThemeProps) => p.theme.colors.grey};
    text-decoration: underline;
  }
`;
