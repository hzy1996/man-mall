const shouban = () => ({
    component: import('./components/App')
})
export default [
    {path: '/shouban', component: shouban}
]