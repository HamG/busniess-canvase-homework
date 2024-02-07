import DOMPurify from 'dompurify';
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
  useMarkdown?: boolean;
  style?: React.CSSProperties;
};

const rules = [
  { rule: /_([^_`]+)_/g, value: '<i>$1</i>' }, // italics
  { rule: /\*\*\s?([^\n]+)\*\*/g, value: '<b>$1</b>' }, // bold
  { rule: /\n/g, value: '</br>' }, // bold
];

const ALLOWED_TAGS = ['b', 'i', 'br'];

const renderSafeText = (value: string) => (
  <div
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(value, { ALLOWED_TAGS }),
    }}
  />
);

const Text = ({
  className,
  children,
  typography = 'sm',
  fontWeight = 400,
  useMarkdown = false,
  style,
}: Props) => {
  let target = children as string;
  if (useMarkdown) {
    rules.forEach((rule) => {
      target = (target as string).replace(rule.rule, rule.value);
    });
  }

  return (
    <Span
      className={className}
      fontWeight={fontWeight}
      typography={typography}
      style={style}
    >
      {renderSafeText(target)}
    </Span>
  );
};

export default Text;
