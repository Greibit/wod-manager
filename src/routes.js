import Layout from './components/layout/Layout.svelte'
import CreateWod from './pages/CreateWod.svelte'
import Dashboard from './pages/Dashboard.svelte'

const routes = [
    {
        name: '/',
        component: Dashboard,
        layout: Layout
    },
    {
        name: 'wod',
        layout: Layout,
        nestedRoutes: [
            { name: 'create', component: CreateWod },
        ]
    },
]

export { routes }
