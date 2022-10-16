import { ipcMain } from 'electron';
import { IpcListnerObj } from 'ipcListners';
import openFileDialog from './openFileDialog';

const listenerObjs: IpcListnerObj[] = [openFileDialog];

const initListeners = () => {
  listenerObjs.forEach((listenerObj) => {
    const { chanel, listener } = listenerObj;
    ipcMain.on(chanel, listener);
  });
};

export default initListeners;
