import createApi from 'api/createApi';

// 获取说明书列表
export const ApiGetInstructionList = (params,self) => {
    return createApi({
        apiName:'/firm/deyi/instruction/list',
        method:'get',
        isTableData: true,
        //mockApiName:'http://10.8.4.89:3000/systemDemo/groupUser/getGroupUserList',
        timeout: 1500,
        params,
        self
    });
};

// 删除说明书
export const ApiDeleteInstruction = (params,self) => {
    return createApi({
        apiName:'/firm/deyi/instruction/delete',
        method:'get',
        isTableData: true,
        timeout: 1500,
        params,
        self
    });
};

// 修改说明书
export const ApiEditInstruction = (params,self) => {
    return createApi({
        apiName:'/firm/deyi/instruction/update',
        method:'post',
        isTableData: true,
        timeout: 1500,
        params,
        self
    });
};

// 新增说明书
export const ApiAddInstruction = (params,self) => {
    return createApi({
        apiName: '/firm/deyi/instruction/add',
        method: 'post',
        isTableData: false,
        // mockApiName:'http://10.8.4.89:3000/systemDemo/groupUser/addGroupUser',
        timeout: 600,
        // mockJson:{
        //     code: 121212,
        //     msg: '模拟数据',
        //     data:　{}
        // },
        params,
        self
    });
};

// 说明书详情
export const ApiInstructionDetail = (params,self) => {
    return createApi({
        apiName: '/firm/deyi/instruction/get',
        method: 'get',
        isTableData: false,
        timeout: 600,
        params,
        self
    });
};

// 获取产品（设备）列表
export const ApiGetProductList = (params,self) => {
    return createApi({
        apiName:'/firm/deyi/instruction/product/list',
        method: 'get',
        isTableData: false,
        // mockApiName:'http://10.8.4.89:3000/systemDemo/groupUser/addGroupUser',
        timeout: 600,
        // mockJson:{
        //     code: 0,
        //     msg: '模拟数据',
        //     data:[
        //         {
        //             "productId": 1141,
        //             "deviceSubtypeId": 1001,
        //             "deviceTypeId": 1,
        //             "bindType": 1,
        //             "developerId": 1,
        //             "productVersion": 1,
        //             "productIcon": "http://200.200.200.58:8981/group1/M00/04/80/yMjIOldehDiAA11IAAkVVGMybN85440599",
        //             "productName": "赫维新风机-高配版",
        //             "productCode": "XX-0002",
        //             "deviceKey": "b433bd5a08ae4426952e437066510ec6",
        //             "moduleId": 4,
        //             "radioCastName": null,
        //             "brandName": null,
        //             "brandIcon": null
        //         },
        //         {
        //             "productId": 1200,
        //             "deviceSubtypeId": 1001,
        //             "deviceTypeId": 1,
        //             "bindType": 1,
        //             "developerId": 1,
        //             "productVersion": 1,
        //             "productIcon": "http://200.200.200.58:8981/group1/M00/04/80/yMjIOldehDiAA11IAAkVVGMybN85440599",
        //             "productName": "赫维新风机",
        //             "productCode": "XX-0001",
        //             "deviceKey": "b433bd5a08ae4426952e437066510ec6",
        //             "moduleId": 4,
        //             "radioCastName": null,
        //             "brandName": null,
        //             "brandIcon": null
        //         }
        //     ]
        // },
        params,
        self
    });
};

