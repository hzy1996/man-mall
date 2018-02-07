const Index = () => ({
    component: import('./components/Index')
})
const Test = () => ({
    component: import('./components/Test')
})
import IndexContent from './components/content'



export default [{
    path: '/',
    redirect: '/Index'
}, {
    path: '/Index',
    component: Index,
    children: [{
        path: 'test',
        component: Test
    }]
}]