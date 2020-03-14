import React from 'react';
import { useThemeUI } from 'theme-ui';
import { VictoryArea, VictoryVoronoiContainer, VictoryTooltip } from 'victory';

import { IColorTheme } from '@types';

interface VictoryLeetcodeProps {
  eloData: {
    x: number,
    y: number,
  }[];
}

interface Amplitude {
  min: number,
  max: number,
}

const LeetcodeFeatured: React.FC<VictoryLeetcodeProps> = ({ eloData }) => {
  const amplitude: Amplitude = eloData.reduce((prev, cur) => {
    return {
      max: (prev.max > cur.y) ? prev.max : cur.y,
      min: (prev.min < cur.y) ? prev.min : cur.y,
    };
  }, {
    max: eloData[0].y,
    min: eloData[0].y,
  });
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <>
      <VictoryArea
        interpolation="natural"
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${datum.y}`}
            labelComponent={
              <VictoryTooltip
                constrainToVisibleArea
                cornerRadius={0}
                flyoutStyle={{
                  fill: "transparent",
                  strokeWidth: 0
                }}
                pointerLength={0}
                style={{
                  fontSize: 16,
                  fill: theme.colors.primary,
                }}
              />
            }
          />
        }
        maxDomain={{ 
          y: amplitude.max + 50
        }}
        minDomain={{ 
          y: amplitude.min - 50
        }}
        animate={{
          onLoad: { 
            duration: 1000 
          }
        }}
        padding={0}
        height={160}
        style={{
          data: {
            fill: "url(#leetcodeFeaturedGradient)", fillOpacity: 0.5, stroke: "grey", strokeWidth: 3
          },
        }}
        data={eloData}
      />
    </>
  );
};

export default LeetcodeFeatured;