import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import {
  LayoutElement,
  MenuElement,
  SiderElement,
  HeaderElement,
  ContentElement,
} from '/src/app/elements';

import { useMenu } from './hook';

import srcLogo from '/src/assets/image/logo.svg';

const LogoWrapper = styled.div`
  padding: 20px 0;
  text-align: center;
`;

const DashboardLayout = () => {
  const { menu } = useMenu();

  return (
    <LayoutElement>
      <SiderElement trigger={null} collapsible width='260px'>
        <LogoWrapper>
          <img src={srcLogo} alt='logo' />
        </LogoWrapper>
        <MenuElement mode='inline' defaultSelectedKeys={['1']} items={menu} />
      </SiderElement>
      <LayoutElement>
        <HeaderElement />
        <ContentElement
          style={{
            padding: '30px',
          }}
        >
          <Outlet />
        </ContentElement>
      </LayoutElement>
    </LayoutElement>
  );
};

export default DashboardLayout;
