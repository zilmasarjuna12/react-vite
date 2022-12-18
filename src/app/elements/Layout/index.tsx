import styled from 'styled-components';

import { Layout, Menu } from 'antd';

const { Sider, Header, Content } = Layout;

export const LayoutElement = styled(Layout)``;

export const SiderElement = styled(Sider)`
  background: #fff !important;
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 4px 0px 40px rgba(61, 87, 92, 0.03);
`;

export const MenuElement = styled(Menu)`
  .ant-menu-item,
  .ant-menu-submenu {
    color: var(--grey-color);
    font-weight: 500;
    font-size: 14px;
  }

  .ant-menu-submenu-open .anticon {
    color: var(--primary-color);
  }

  .ant-menu-submenu-open {
    color: var(--black-color);
  }

  .ant-menu-sub {
    background: #fff !important;
  }

  .ant-menu-submenu-title:hover {
    background-color: #ffcdc7 !important;
  }

  .ant-menu-item:hover {
    background-color: #ffcdc7 !important;
  }

  .ant-menu-item-selected .anticon {
    color: var(--primary-color);
  }

  .anticon {
    font-size: 18px !important;
  }

  .ant-menu-item-selected {
    color: var(--black-color);
  }
`;

export const HeaderElement = styled(Header)`
  background: #fff !important;
  padding: 0 40px !important;

  .anticon {
    margin-left: -45px;
    position: relative;
    z-index: 1;
  }
`;

export const ContentElement = styled(Content)``;
