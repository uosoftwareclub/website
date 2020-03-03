import React, { useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode, useThemeUI } from 'theme-ui';

import NavigationFooter from '@components/Navigation/Navigation.Footer';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import ArticlesContextProvider from '../../sections/articles/Articles.List.Context';

import { globalStyles } from '@styles/index';
import { IColorThemeProps, IColorTheme } from '@types';

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = ({ children }) => {
  const [colorMode] = useColorMode();
  const themeContext = useThemeUI();
  const t: IColorTheme = themeContext.theme as any;

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);
  return (
    <ArticlesContextProvider>
      <Container theme={t}>
        <Global styles={globalStyles} />
        <NavigationHeader />
        {children}
        <NavigationFooter />
      </Container>
    </ArticlesContextProvider>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${(p: IColorThemeProps) => p.theme.colors.background};
  transition: ${(p: IColorThemeProps) => p.theme.colorModeTransition};
  min-height: 100vh;
`;
