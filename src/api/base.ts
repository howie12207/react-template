import req from '@/config/request';
import { base } from '@/config/apiPath';
import SnackbarUtils from '@/utils/snackBar';

type Params = { account: string; password: string };
export const apiPost = async (params: Params) => {
    const res = await req(`${base}/login`, {
        method: 'POST',
        body: JSON.stringify(params),
    });
    if (res?.code === 200) {
        SnackbarUtils.success('登入成功');
        return true;
    } else return false;
};

export const apiGet = async () => {
    const res = await req(`${base}/dbDownload`);
    if (res) {
        SnackbarUtils.success('下載成功');
        return res;
    } else return false;
};
