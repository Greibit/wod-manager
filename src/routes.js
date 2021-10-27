import Layout from './components/layout/Layout.svelte'
import CreateWod from './pages/CreateWod.svelte'
import WodList from './pages/WodList.svelte'
import Dashboard from './pages/Dashboard.svelte'
import ExerciseList from "./pages/ExerciseList.svelte";
import CreateExercise from "./pages/CreateExercise.svelte";

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
            { name: 'list', component: WodList },
        ]
    },
    {
        name: 'exercise',
        layout: Layout,
        nestedRoutes: [
            { name: 'create', component: CreateExercise },
            { name: 'list', component: ExerciseList },
        ]
    },
]

export { routes }
