import { Flex, Input, Typography } from 'antd';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Wrapper = styled(Flex)`
  width: 100%;
`;

const Label = styled(Typography.Text)`
  flex: none;
`;

const InputWithLabel = ({ label, value, name, onChange }: Props) => {
  return (
    <Wrapper gap={8} align="center">
      <Label>{label}:</Label>
      <Input name={name} value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default InputWithLabel;
