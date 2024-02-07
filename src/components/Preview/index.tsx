import { Flex } from 'antd';
import { useAtomValue } from 'jotai';
import styled from 'styled-components';
import { benchmarkAtom } from '../../stores/benchmark';
import Text from '../Text';
import SourcePreview from './SourcePreview';

const Wrapper = styled(Flex)`
  width: 100%;
  padding: 16px 12px;
  gap: 10px;
`;

const Description = styled.div`
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  padding: 6px 14px 10px;
`;

const Preview = () => {
  const benchmark = useAtomValue(benchmarkAtom);

  return (
    <Wrapper vertical>
      <Text typography="base" fontWeight={600}>
        {benchmark.title}
      </Text>
      <Description>
        <Text>{benchmark.description}</Text>
      </Description>
      {benchmark.sources.map((source, index) => (
        <SourcePreview source={source} key={index} />
      ))}
    </Wrapper>
  );
};

export default Preview;
