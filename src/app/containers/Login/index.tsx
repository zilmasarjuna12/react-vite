import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Card, Form } from 'antd';

import { FormItemElement, InputElement, ButtonElement } from '/src/app/elements/index';

// hooks
import { useAuth } from '/src/app/hooks/auth';
import { useCaptcha } from './hook';

import { loginPayload } from '/src/app/services/type';

import { Captcha, FloatLabel } from './components';

const Container = styled.div`
  background: var(--primary-color);
  height: 100vh;

  /* Center vertically and horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  width: 500px;

  h1 {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const CardWrapper = styled(Card)`
  padding: 30px 40px;

  h3 {
    font-size: 32px;
    color: #202020;
    font-weight: 600;
  }

  p {
    font-size: 18px;
    color: #202020;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

const RowForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 20px;

  a {
    color: var(--black-color);
  }
`;

const Login: React.FunctionComponent = () => {
  const { signin } = useAuth();
  const { data } = useCaptcha();

  return (
    <Container>
      <LoginWrapper>
        <h1>Operation Portal</h1>

        <CardWrapper>
          <h3>Masuk Akun</h3>
          <p>Silakan masuk menggunakan email dan password kamu</p>

          <Form
            size='large'
            name='normal_login'
            className='login-form'
            onFinish={(field) => {
              const value: loginPayload = {
                email: field.email,
                password: field.password,
                trace_id: 's',
                session_id: data?.data?.session_id,
                captcha_code: field.captcha,
              };

              signin.mutate(value);
            }}
          >
            <FormItemElement
              name='email'
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <FloatLabel label='Email' placeholder='Email' />
            </FormItemElement>
            <FormItemElement
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <FloatLabel label='Password' placeholder='Password' type='password' />
            </FormItemElement>
            <RowForgotPassword>
              <Link to='/password'>Forgot password?</Link>
            </RowForgotPassword>

            <Captcha />

            <FormItemElement
              name='captcha'
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <InputElement type='text' />
            </FormItemElement>

            <FormItemElement>
              <ButtonElement
                type='primary'
                size='large'
                htmlType='submit'
                className='login-form-button'
                disabled={signin.isLoading}
                block
              >
                {signin.isLoading ? 'Loading..' : 'Masuk'}
              </ButtonElement>
            </FormItemElement>
          </Form>
        </CardWrapper>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
