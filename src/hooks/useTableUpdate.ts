import type { ActionType } from '@ant-design/pro-components';
import message from 'antd/lib/message';



const useTableUpdate = () => {
  const updateHandler = async <T extends Function, K>(
    updateApi: T,
    actionRef: React.MutableRefObject<ActionType | undefined> | undefined,
    body: K,
    updateOkHandler?: () => void,
  ) => {
    let res;
    try {
      res = await updateApi(body);
      if (res.code === 0) {
        actionRef?.current?.reload();
        message.success('更新成功');
        if (updateOkHandler) updateOkHandler();
      }
    } catch (error) {
      // message.error((error as Error)?.message);
    }
    return res;
  };
  return {
    updateHandler,
  };
};

export default useTableUpdate;
