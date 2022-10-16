/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const openFile = (filters: any[]) => {
  window.electron.ipcRenderer.sendMessage('open-file-dialog', {
    filters,
  });
};

const useFileToTextField = (textFieldProps: any) => {
  useEffect(() => {
    window.electron.ipcRenderer.once('open-file-dialog', (fileContent) => {
      const onChange = textFieldProps?.onChange as any;
      if (onChange)
        onChange({
          target: {
            value: fileContent,
            name: textFieldProps?.name,
          },
        });
    });
  }, [textFieldProps.name, textFieldProps.onChange]);

  return {
    openFile,
  };
};

export default useFileToTextField;
