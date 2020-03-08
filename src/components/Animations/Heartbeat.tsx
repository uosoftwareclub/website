import React from "react";
import styled from "@emotion/styled";

const Heartbeat: React.FC<{}> = () => {
  return (
    <Beat>
      ❤️
    </Beat>
  );
};
  
export default Heartbeat;

const Beat = styled.div`
  @keyframes beat {
    to {
    -webkit-transform: scale(1.25);
    -moz-transform: scale(1.25);
    -o-transform: scale(1.25);
    -ms-transform: scale(1.25);
    transform: scale(1.25);
    }
  }

  @-moz-keyframes beat {
    to {
    -moz-transform: scale(1.25);
    transform: scale(1.25);
    }
  }

  @-webkit-keyframes beat {
    to {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
    }
  }

  @-ms-keyframes beat {
    to {
    -ms-transform: scale(1.25);
    transform: scale(1.25);
    }
  }

  @-o-keyframes beat {
    to {
    -o-transform: scale(1.25);
    transform: scale(1.25);
    }
  }
  margin: 0 4px;
  display: inline-block;
  -webkit-animation: beat .25s infinite alternate;
  -moz-animation: beat .25s infinite alternate;
  -ms-animation: beat .25s infinite alternate;
  -o-animation: beat .25s infinite alternate;
  animation: beat .25s infinite linear alternate;
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -o-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
`;