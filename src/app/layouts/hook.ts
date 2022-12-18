import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { UserOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';

import { IconDashboard } from '/src/app/elements';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const menus: MenuItem[] = [
      getItem(
        React.createElement(Link, { to: '/dashboard' }, 'Dashboard'),
        '1',
        React.createElement(IconDashboard),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Management User'),
        '2',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Management Role'),
        '3',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Onboarding Nasabah'),
        '4',
        React.createElement(UserOutlined),
      ),
      getItem('Nasabah High Risk', '5', React.createElement(UserOutlined), [
        getItem(React.createElement(Link, { to: '/dashboard/user' }, 'Daftar High Risk'), '51'),
        getItem(React.createElement(Link, { to: '/dashboard/user' }, 'Cek Data Nasabah'), '52'),
        getItem(React.createElement(Link, { to: '/dashboard/user' }, 'Approval Nasabah'), '53'),
      ]),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Sistem Ambil Keputusan'),
        '6',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Data Nasabah'),
        '7',
        React.createElement(UserOutlined),
      ),
      getItem('Kode Referal', '8', React.createElement(UserOutlined), [
        getItem(React.createElement(Link, { to: '/dashboard/user' }, 'List Referal'), '81'),
        getItem(React.createElement(Link, { to: '/dashboard/user' }, 'Report Referal'), '82'),
      ]),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Otorisasi'),
        '9',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Audit Trail'),
        '10',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Data Transaksi'),
        '11',
        React.createElement(UserOutlined),
      ),
      getItem('Koreksi Data Transaksi', '12', React.createElement(UserOutlined), [
        getItem(
          React.createElement(Link, { to: '/dashboard/user' }, 'Upload Koreksi'),
          '121',
          React.createElement(UserOutlined),
        ),
        getItem(
          React.createElement(Link, { to: '/dashboard/user' }, 'Checking Koreksi'),
          '122',
          React.createElement(UserOutlined),
        ),
        getItem(
          React.createElement(Link, { to: '/dashboard/user' }, 'Approval Koreksi'),
          '123',
          React.createElement(UserOutlined),
        ),
      ]),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Manajemen Peremeter'),
        '13',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Whitelist User'),
        '14',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'User Login Count'),
        '15',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Suku Bunga (LPS)'),
        '16',
        React.createElement(UserOutlined),
      ),
      getItem(
        React.createElement(Link, { to: '/dashboard/user' }, 'Banner Magement'),
        '17',
        React.createElement(UserOutlined),
      ),
      getItem('Report', '18', React.createElement(UserOutlined), [
        getItem(
          React.createElement(Link, { to: '/dashboard/user' }, 'Report Onboarding'),
          '181',
          React.createElement(UserOutlined),
        ),
        getItem(
          React.createElement(Link, { to: '/dashboard/user' }, 'Report High Risk'),
          '182',
          React.createElement(UserOutlined),
        ),
        getItem(
          React.createElement(Link, { to: '/dashboard/user' }, 'Report Koreksi Data'),
          '183',
          React.createElement(UserOutlined),
        ),
      ]),
      getItem(
        React.createElement(Link, { to: '/dashboard/logout' }, 'Logout'),
        '19',
        React.createElement(UserOutlined),
      ),
    ];

    setMenu(menus);
  }, [setMenu]);

  return {
    menu,
  };
};
