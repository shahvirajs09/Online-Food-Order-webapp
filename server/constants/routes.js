//Common routes
export const COMMON_ROUTES = {
        BASE_ROUTE: '/',
    API: '/api',
};
//App routes
export const APP_ROUTES = {
    LEFTOVER_MENU: '/leftovers',
    USER_ROUTES : '/users',
    MENU_ITEM_ROUTES : '/menuitems',
    RESTAURANT_ROUTES :'/restaurants',
    ORDER_ROUTES:'/orders'
};

//left over crud url
export const LEFTOVER_MENU_ROUTES = {
    ADD_NEW: '/addnew',
    DELETE :'/delete/:id/:rId',
    UPDATE : '/update/:id',
    GET_DETAILS : "/getdetails/:id"
};

//user crud url
export const USER_ROUTES={
    ADD_NEW: '/addnew',
    DELETE :'/delete/:id',
    UPDATE : '/update/:id',
    GET_DETAILS : "/getdetails/:userName/:userPassword"
};

//menu crud url
export const MENU_ITEM_ROUTES={
    ADD_NEW: '/addnew',
    DELETE :'/delete/:id/:rId',
    UPDATE : '/update/:id',
   GET_DETAILS : "/getdetails/:id/:rId"
};
//restaurant  crud url
export const RESTAURANT_ROUTES={
    ADD_NEW: '/addnew',
    DELETE :'/delete/:id',
    UPDATE : '/update/:id',
    GET_DETAILS : "/getdetails/:id"
};

///order crud url
export const ORDER_ROUTES={
    ADD_NEW: '/addnew/:rId',
    DELETE :'/delete/:id/:rId',
    UPDATE : '/update/:id/:rId',
    UPDATE_ORDER_STATUS:'/updatestatus/:rId',
    GET_DETAILS : "/getdetails/:id/:rId"
};