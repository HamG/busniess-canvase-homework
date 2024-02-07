import { Button, Divider, Flex, theme } from 'antd';
import { Source } from '../../types/source';
import { BookTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import Text from '../Text';

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
        <DataTitle gap={4} align="center">
          <BookTwoTone />
          <Text fontWeight={600}>{source.title}</Text>
          <Button
            size="small"
            type="link"
            style={{ color: token.colorSuccess }}
            href={source.url}
            target="_blank"
          >
            URL
          </Button>
        </DataTitle>
        {source.data.map((d, index) => (
          <Data key={index}>
            <Text>{d}</Text>
          </Data>
        ))}
      </Inner>
    </div>
  );
};

export default SourcePreview;
