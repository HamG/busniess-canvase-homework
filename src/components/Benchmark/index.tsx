import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Typography, theme } from 'antd';
import { useAtom } from 'jotai';
import { ChangeEvent } from 'react';
import { benchmarkAtom } from '../../stores/benchmark';
import BenchmarkSource from '../BenchmarkSource';
import InputWithLabel from '../InputWithLabel';

const { useToken } = theme;

const BenchmarkEditor = () => {
  const { token } = useToken();
  const [values, setValues] = useAtom(benchmarkAtom);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSourceAdd = () => {
    setValues({
      ...values,
      sources: [...values.sources, { title: '', url: '', data: [''] }],
    });
  };

  const handleSave = () => {
    localStorage.setItem('data', JSON.stringify(values));
  };

  return (
    <Flex vertical flex="578px 0 0" gap={8} align="flex-start">
      <Typography.Title level={4}>벤치마크</Typography.Title>
      <InputWithLabel
        label="제목"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <InputWithLabel
        label="용어 설명"
        name="description"
        value={values.description}
        onChange={handleChange}
      />

      {values.sources.map((_, index) => (
        <BenchmarkSource key={index} index={index} />
      ))}
      <Button icon={<PlusOutlined />} onClick={handleSourceAdd}>
        벤치마크 출처 추가하기
      </Button>
      <Button
        style={{
          alignSelf: 'flex-end',
          backgroundColor: token.colorSuccess,
          color: token.colorWhite,
        }}
        onClick={handleSave}
      >
        저장
      </Button>
    </Flex>
  );
};

export default BenchmarkEditor;
