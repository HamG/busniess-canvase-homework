import { Button, Divider, Flex, theme } from 'antd';
import { Source } from '../../types/source';
import { BookTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import Text from '../Text';
import { isValidUrl } from '../../utils/URLs';

type Props = {
  source: Source;
};

const { useToken } = theme;

const Inner = styled(Flex)`
  padding: 0 6px;
`;

const DataTitle = styled(Flex)`
  padding: 6px;
`;

const Data = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  padding: 8px;
`;

const SourcePreview = ({ source }: Props) => {
  const { token } = useToken();

  return (
    <div>
      <Divider dashed style={{ margin: 0 }} />
      <Inner vertical gap={10}>
        {source.title ? (
          <DataTitle gap={4} align="center">
            <BookTwoTone />
            <Text fontWeight={600}>{source.title}</Text>
            <Button
              size="small"
              type="link"
              style={{ color: token.colorSuccess }}
              href={isValidUrl(source.url) ? source.url : undefined}
              target="_blank"
              onClick={
                !isValidUrl(source.url)
                  ? () => alert('유효한 url이 아닙니다.')
                  : undefined
              }
            >
              URL
            </Button>
          </DataTitle>
        ) : null}
        {source.data.map((d, index) =>
          d ? (
            <Data key={index}>
              <Text>{d}</Text>
            </Data>
          ) : null
        )}
      </Inner>
    </div>
  );
};

export default SourcePreview;
