/**
 * Created by 80011266 on 2018/3/16.
 */

import * as common from './common'; // common
import * as groupUserDemo from './level1_demo/groupUserDemo/'; // 小组成员
import * as instructions from './oprManage/instructions/'; // 德意-电子说明书

export const api = Object.assign(
    common,
    groupUserDemo,
    instructions,
);