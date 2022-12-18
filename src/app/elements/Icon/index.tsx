import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const dashboard = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M21.2099 15.8881C20.5737 17.3926 19.5787 18.7183 18.3118 19.7494C17.0449 20.7805 15.5447 21.4856 13.9424 21.8029C12.34 22.1203 10.6843 22.0403 9.12006 21.5699C7.55578 21.0996 6.13054 20.2532 4.96893 19.1048C3.80733 17.9564 2.94473 16.5409 2.45655 14.9821C1.96837 13.4233 1.86948 11.7686 2.16851 10.1628C2.46755 8.55691 3.15541 7.04875 4.17196 5.77015C5.18851 4.49156 6.5028 3.48144 7.99992 2.82812'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const IconDashboard = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={dashboard} {...props} />
);
