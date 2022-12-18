import { useState } from 'react';

import styled, { css } from 'styled-components';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { InputElement, InputElementPassword } from '/src/app/elements';

/* types */
interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface LabelProps {
  mode?: string;
}

/* style */
const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label<LabelProps>`
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 15px;
  transition: 0.2s ease all;
  color: var(--grey-color);
  font-size: 14px;
  z-index: 1;

  ${(props) => {
    switch (props.mode) {
      case 'label':
        return css`
          top: -8px;
          font-size: 12px !important;
          background: white;
          padding: 0 4px;
          margin-left: -4px;
        `;
    }
  }}
`;

const FloatLabel: React.FC<Props> = ({
  label,
  value,
  placeholder,
  type,

  onChange,
}: Props) => {
  const [focus, setFocus] = useState(false);
  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  return (
    <Wrapper onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
      {type == 'password' ? (
        <InputElementPassword
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={onChange}
        />
      ) : (
        <InputElement type={type} onChange={onChange} />
      )}
      <Label mode={isOccupied ? 'label' : 'placeholder'}>{isOccupied ? label : placeholder}</Label>
    </Wrapper>
  );
};

export default FloatLabel;
