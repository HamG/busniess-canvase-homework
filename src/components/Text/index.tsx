import styled from 'styled-components';

export const Typography = {
  base: 'base' as const,
  sm: 'sm' as const,
};
type Typography = (typeof Typography)[keyof typeof Typography];

export const FontWeight = {
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
  return (
    <Span
      className={className}
      fontWeight={fontWeight}
      typography={typography}
      style={style}
    >
      {children}
    </Span>
  );
};

export default Text;
