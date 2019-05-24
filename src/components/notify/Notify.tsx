import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NotifyInner from './NotifyInner';

import '../notify/index.css';

let notifyIndex: number = 0;
const notifyList: object = {};

const getNotifyContainer = () => {
  let notifyContainer = document.querySelector('.zhui-notify-container');
  if (!notifyContainer) {
    let container = document.createElement('div');
    container.className = 'zhui-notify-container';
    notifyContainer = document.body.appendChild(container);
  }
};

const closeNotify = (id: number) => {
  const notify = notifyList[id];
  if (!notify) return;

  const {
    timerId,
    callback,
    tempContainer
  } = notify;

  clearTimeout(timerId);
  ReactDOM.unmountComponentAtNode(tempContainer);
  delete notifyList[id];
  if (callback) callback(notify);
};

export default function open(args: any) {
  const {
    duration,
    callback,
    ...others
  } = args;

  getNotifyContainer();
  const tempContainer: HTMLElement = document.createElement('div');
  const notifyId: number = notifyIndex++;
  const props = {
    notifyId,
    selector: '.zhui-notify-container',
    isIn: true,
    ...others
  };

  ReactDOM.render(React.createElement(NotifyInner, props), tempContainer);

  const timerId = setTimeout(() => {
    ReactDOM.render(
      <NotifyInner
        {...props}
        isIn={false}
        close={() => closeNotify(notifyId)}
      />,
      tempContainer
    );
  }, duration || 2000);

  notifyList[notifyId] = { timerId, callback, tempContainer };
  return notifyId;
}