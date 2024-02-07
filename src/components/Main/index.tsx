import { Flex } from 'antd';
import styled from 'styled-components';
import BenchmarkEditor from '../Benchmark';
import Preview from '../Preview';

const VerticalDivider = styled.div`
  width: 1px;
  background-color: #000000;
  opacity: 0.1;
`;

const Main = () => {
  return (
    <Flex gap={10}>
      <BenchmarkEditor />
      <VerticalDivider />
      <Preview />
    </Flex>
  );
};

export default Main;
