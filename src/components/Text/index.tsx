import { Fragment } from 'react';
import styled from 'styled-components';

const Typography = {
  base: 'base' as const,
  sm: 'sm' as const,
};
type Typography = (typeof Typography)[keyof typeof Typography];

const FontWeight = {
  Normal: 400 as const,
  Bold: 600 as const,
};
type FontWeight = (typeof FontWeight)[keyof typeof FontWeight];

const handleTypography = (typography: Typography) => {
  switch (typography) {
    case Typography.base:
      return `
        font-size: 14px;
        line-height: 22px;
      `;
    case Typography.sm:
      return `
        font-size: 12px;
        line-height: 20px;
      `;
    default:
      return `
        font-size: 12px;
        line-height: 20px;
      `;
  }
};

const Span = styled.span<{ typography: Typography; fontWeight: FontWeight }>`
  display: block;
  font-family: 'Pretendard Variable', Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

  ${({ typography }) => handleTypography(typography)}
  font-weight: ${({ fontWeight }) => fontWeight};
`;

type Props = {
  className?: string;
  children: React.ReactNode;
  typography?: Typography;
  fontWeight?: FontWeight;
  style?: React.CSSProperties;
};

const Text = ({
  className,
  children,
  typography = 'sm',
  fontWeight = 400,
  style,
}: Props) => {
  const texts = (children as string).split(/\n|\r|<br>|<br \/>|<br\/>/);

  return (
    <Span
      className={className}
      fontWeight={fontWeight}
      typography={typography}
      style={style}
    >
      {texts.map((text, index) => (
        <Fragment key={index}>
          {text}
          <br />
        </Fragment>
      ))}
    </Span>
  );
};

export default Text;
