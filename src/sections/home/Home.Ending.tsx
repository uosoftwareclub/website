import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTrail, animated } from 'react-spring'
import Section from '@components/Section';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import VizSensor from 'react-visibility-sensor';
import { IColorThemeProps } from '@types';
import mediaqueries from '@styles/media';
import Button from '@components/Button';
import { Link } from 'gatsby';


const items = ['Together, let\'s discover what', 'you are truly capable of. ✌']
const config = { mass: 5, tension: 2000, friction: 200 }

const HomeEnding = () => {
  const [toggle, set] = useState(false)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 90 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <EndingContainer>
        <Section>
          <VizSensor
            onChange={
              (isVisible) => set(isVisible)
            }
          >
            <TrailsContainer>
              <div>
                {trail.map(({ x, height, ...rest }, index) => (
                  <animated.div
                    key={items[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ height }}>{items[index]}</animated.div>
                  </animated.div>
                ))}
              </div>
            </TrailsContainer>
          </VizSensor>
          <Link
            to="contact"
          >
            <Button
              text="Contact Us"
              type="button"
            />
          </Link>
          
        </Section>
      </EndingContainer>
    
  );
};

export default HomeEnding;

const EndingContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TrailsContainer = styled.div<IColorThemeProps>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  .trails-text {
    position: relative;
    width: 100%;
    height: 90px;
    line-height: 90px;
    color: ${(p) => p.theme.colors.primary};;
    font-family: ${(p) => p.theme.fonts.sanserif};
    font-size: 5em;
    font-weight: 700;
    will-change: transform, opacity;
    overflow: hidden;
  }

  .trails-text > div {
    overflow: hidden;
  }

  ${mediaqueries.desktop`
    .trails-text {
      font-size: 3em;
    }
  `}

  ${mediaqueries.phablet`
    .trails-text {
      font-size: 2em;
    }
  `}
`
