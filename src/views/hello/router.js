const App = () => ({
  component: import ('./components/App')
})
const Index = () => ({
  component: import ('./components/Index')
})
const Test = () => ({
  component: import ('./components/Test')
})

export default [{
  path: '/',
  redirect: '/hello'
},{
  path: '/hello',
  component: App,
  // redirect: '/hello/index',
  children: [{
    path: 'index',
    component: Index
  },{
    path: 'test',
    component: Test
  }]
}]
