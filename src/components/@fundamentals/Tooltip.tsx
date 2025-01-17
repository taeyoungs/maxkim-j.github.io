import React, { ReactChild, useState, useRef } from 'react';
import { styled } from '../../styles/stitches';

interface Props {
  tooltip: ReactChild;
  children: ReactChild;
  trigger?: 'hover' | 'click';
}

function Tooltip({ children, tooltip }: Props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <TooltipWrapper
      onClick={() => {
        setIsTooltipOpen((s) => !s);
      }}
      ref={tooltipWrapperRef}
    >
      <div>{children}</div>
      {isTooltipOpen ? (
        <TooltipContent
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {tooltip}
        </TooltipContent>
      ) : null}
    </TooltipWrapper>
  );
}

const TooltipWrapper = styled('div', {
  position: 'relative',
  cursor: 'pointer',
});

const TooltipContent = styled('div', {
  margin: 0,
  top: '30px',
  padding: '3px',
  position: 'absolute',
});

export default Tooltip;
