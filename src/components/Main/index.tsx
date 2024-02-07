import { Flex } from 'antd';
import styled from 'styled-components';
import BenchmarkEditor from '../Benchmark';
import Preview from '../Preview';
import { useSetAtom } from 'jotai';
import { benchmarkAtom } from '../../stores/benchmark';
import { useEffect } from 'react';
import { getBenchmarkData } from '../../api/benchmarkData';

const VerticalDivider = styled.div`
  width: 1px;
  background-color: #000000;
  opacity: 0.1;
`;

const Main = () => {
  const setBenchmark = useSetAtom(benchmarkAtom);

  const initializeBenchmark = async () => {
    const data = await getBenchmarkData();
    setBenchmark(data);
  };
  useEffect(() => {
    initializeBenchmark();
  });

  return (
    <Flex gap={10}>
      <BenchmarkEditor />
      <VerticalDivider />
      <Preview />
    </Flex>
  );
};

export default Main;
