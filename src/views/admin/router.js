const admin = () => ({
    component: import('./components/admin')
})
const admin_login = () => ({
    component: import('./components/login')
})
const comment = () => ({
    component: import('./components/comment')
})
const member = () => ({
    component: import('./components/Member')
})
const adm = () => ({
    component: import('./components/Administrators')
})
const goodsclass = () => ({
    component: import('./components/GoodsClass')
})
const goods = () => ({
    component: import('./components/Goods')
})
const addgoods = () => ({
    component: import('./components/AddGoods')
})
const updategoods = () => ({
    component: import('./components/updateGoods')
})
const updateuser = () => ({
    component: import('./components/updateUser')
})
const updateclass = () => ({
    component: import('./components/updateClass')
})
export default [{
        path: '/admin',
        component: admin,
        children:[{
            path:'/admin/member',
            component:member
        },{
            path:'/admin/adm',
            component:adm
        },{
            path:'/admin/goodsclass',
            component:goodsclass
        },{
            path:'/admin/goods',
            component:goods
        },{
            path:'/admin/addgoods',
            component:addgoods
        },{
            path:'/admin/updategoods',
            component:updategoods
        },{
            path:'/admin/updateuser',
            component:updateuser
        },{
            path:'/admin/updateclass',
            component:updateclass
        },{
            path:'/admin/comment',
            component:comment
        }
    ]
    },{
        path:'/admin_login',
        component:admin_login
    }
]