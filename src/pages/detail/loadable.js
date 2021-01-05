import React from 'react';
import Loadable from 'react-loadable';


const LoadableComponent = Loadable({
  loader: () => import('./'), // 需要加载哪个页面
    loading() {
      return <div>正在加载...</div>
  }
});

export default () => <LoadableComponent/>  // 无状态组件

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }

// 以上实现了 detail 的异步加载