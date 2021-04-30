// import { useIntl } from 'umi';
// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  // const intl = useIntl();
  // const defaultMessage = intl.formatMessage({
  //   id: 'app.copyright.produced',
  //   defaultMessage: '暂无',
  // });

  return (
    <DefaultFooter
      copyright={`2021 暂无`}
      links={[
        // {
        //   key: 'Ant Design Pro',
        //   title: 'Ant Design Pro',
        //   href: 'https://pro.ant.design',
        //   blankTarget: true,
        // },
        // {
        //   key: 'github',
        //   title: <GithubOutlined />,
        //   href: 'https://github.com/ant-design/ant-design-pro',
        //   blankTarget: true,
        // },
        // {
        //   key: 'Ant Design',
        //   title: 'Ant Design',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};
