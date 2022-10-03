type browserList = 'edge' | 'edg/' | 'opr' | 'chrome' | 'trident' | 'firefox' | 'safari';

interface Props {
  acceptBrowser?: browserList[];
  children?: JSX.Element;
}

const BrowserBlockProvider = ({ acceptBrowser, children }: Props) => {
  const agent = window.navigator.userAgent.toLocaleLowerCase();
  const isAcceptBrowser = acceptBrowser
    ?.map(brower => {
      if (agent.indexOf(brower) !== -1) {
        return true;
      } else return false;
    })
    .includes(true);

  console.log(agent.indexOf('safari'));
  if (isAcceptBrowser) {
    return <>{children}</>;
  } else {
    alert(`지원되지 않는 브라우저입니다. \n지원되는 브라우저 :${acceptBrowser?.join(',')}`);
    return <></>;
  }
};

export default BrowserBlockProvider;
