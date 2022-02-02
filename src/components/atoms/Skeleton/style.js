import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const shine = keyframes`
100%{
  transform: translateX(100%);
}
`;

export const Skeleton = styled.span.attrs({
    children: <>&zwnj;</>,
    'aria-hidden': 'true'
})`
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  width: ${({ theme, size, width }) =>
        width || (size ? theme.spacing[size] : "100%")};
  height: ${({ theme, size, height }) =>
        height || (size ? theme.spacing[size] : "unset")};

  border-radius: ${({ circle }) => circle ? '500px' : '8px'};

  display: inline-flex;
  line-height: 1;
  position: relative;
  overflow: hidden;

  &::after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.neutral.lightest},
      ${({ theme }) => theme.colors.neutral.light},
      ${({ theme }) => theme.colors.neutral.lightest}
    );
    transform: translateX(-100%);
    animation: ${shine} 1s ease-in-out infinite;
  }
`;

Skeleton.defaultProps = {
    circle: false,
};

Skeleton.propTypes = {
    size: PropTypes.oneOf([
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
    ]),
    circle: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
};



export const RepeatSkeletonBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxs};
`;