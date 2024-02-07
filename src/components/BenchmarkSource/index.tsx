import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Flex, Input, Typography, theme } from 'antd';
import { useAtom } from 'jotai';
import { ChangeEvent, useMemo } from 'react';
import { sourcesAtom } from '../../stores/benchmark';
import styled from 'styled-components';

type Props = {
  index: number;
};

const { useToken } = theme;

const CardWrapper = styled(Card)`
  width: 100%;
`;

const Label = styled(Typography.Text)`
  flex: none;
`;

const BenchmarkSource = ({ index }: Props) => {
  const { token } = useToken();
  const [values, setValues] = useAtom(sourcesAtom);

  const source = useMemo(() => {
    return values[index];
  }, [values, index]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newSources = [...values];
    newSources[index][name] = value;

    setValues(newSources);
  };

  const handleDelete = () => {
    const newSources = [...values];
    newSources.splice(index, 1);
    setValues(newSources);
  };

  const handleDataAdd = () => {
    const newSources = [...values];
    newSources[index].data.push('');
    setValues(newSources);
  };

  const handleDataChange = (e: ChangeEvent<HTMLTextAreaElement>, i: number) => {
    const { value } = e.target;
    const newSources = [...values];
    newSources[index]['data'][i] = value;
    setValues(newSources);
  };

  const handleDataDelete = (i: number) => {
    const newSources = [...values];
    newSources[index]['data'].splice(i, 1);
    setValues(newSources);
  };

  return (
    <>
      <Divider />
      <Typography.Title level={5}>벤치마크 출처</Typography.Title>
      <CardWrapper>
        <Flex justify="space-between">
          <Flex vertical gap={8} align="flex-start">
            <Flex gap={8} align="center">
              <Label>제목:</Label>
              <Input
                name="title"
                value={source.title}
                onChange={handleChange}
              />
            </Flex>
            <Flex gap={8} align="center">
              <Label>URL:</Label>
              <Input name="url" value={source.url} onChange={handleChange} />
            </Flex>
          </Flex>
          <Button
            danger
            type="primary"
            icon={<MinusOutlined />}
            onClick={handleDelete}
          >
            삭제
          </Button>
        </Flex>
        {source.data.map((d: string, i: number) => (
          <Card
            style={{
              backgroundColor: token.colorFillSecondary,
              marginTop: '16px',
            }}
            key={i}
          >
            <Flex vertical gap={8}>
              <Flex justify="space-between">
                <Typography.Text>벤치마크 데이터</Typography.Text>
                <Button
                  danger
                  type="primary"
                  icon={<MinusOutlined />}
                  onClick={() => handleDataDelete(i)}
                >
                  삭제
                </Button>
              </Flex>
              <Input.TextArea
                rows={3}
                value={d}
                onChange={(e) => handleDataChange(e, i)}
              />
            </Flex>
          </Card>
        ))}
        <Button icon={<PlusOutlined />} onClick={handleDataAdd}>
          벤치마크 출처 추가하기
        </Button>
      </CardWrapper>
    </>
  );
};

export default BenchmarkSource;
