/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { IpcListener, IpcListnerObj } from 'ipcListners';
import { app } from 'electron';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execute = promisify(exec);

const _playbookValidator: IpcListener = async (event, args) => {
  const { content } = args;
  const playbookPath = path.join(app.getPath('temp'), 'playbook.yml');
  fs.writeFileSync(playbookPath, content);

  // validate play book
  try {
    const { stderr } = await execute(
      `ansible-playbook --syntax-check ${playbookPath}`
    );

    event.reply('validate-ansible-playbook', { result: stderr });
  } catch (error) {
    event.reply('validate-ansible-playbook', { error });
  }
};

const playbookValidator: IpcListnerObj = {
  chanel: 'validate-ansible-playbook',
  listener: _playbookValidator,
};

export default playbookValidator;
