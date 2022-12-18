import styled from 'styled-components';
import { Input, Form } from 'antd';

const InputWrapper = styled(Input)`
  border-radius: 10px;
  font-size: 14px;
  color: #202020;
  font-weight: 400;
  font-style: normal;
  padding: 15px;
`;

const InputWrapperPassword = styled(Input.Password)`
  border-radius: 10px;
  font-size: 14px;
  color: #202020;
  font-weight: 400;
  font-style: normal;
  padding: 15px;
`;

const FormItem = styled(Form.Item)`
  margin-bottom: 30px;
`;

export const FormItemElement = FormItem;

export const InputElement = InputWrapper;

export const InputElementPassword = InputWrapperPassword;

export default InputElement;
