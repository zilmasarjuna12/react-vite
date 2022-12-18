import styled from 'styled-components';

import { useCaptcha } from '../hook';

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
`;

const Captcha: React.FC = () => {
  const { data, refetch } = useCaptcha();

  return <Image src={`data:image/png;base64,${data?.data?.captcha}`} onClick={() => refetch()} />;
};

export default Captcha;
