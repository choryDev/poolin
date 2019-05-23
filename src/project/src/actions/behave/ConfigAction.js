import {WORKSPACE, NOT_WORKSPACE} from '../def/ConfigType';

export const inWorkspace = () => ({
  type: WORKSPACE
});

export const notInWorkspace = () => ({
  type: NOT_WORKSPACE
})