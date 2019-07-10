
import VueRouter from 'vue-router'
// import Test from './components/Test';
import Register from './components/Register';
import Home from './pages/Home';
import About from './pages/About'
import Login from './pages/Login'
// import AdminPanel from './pages/AdminPanel'
import Dashboard from './pages/user/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'

const routes = [
        
        {
            path: '/',
            component: Home,
                meta: {
                    auth: undefined
                }
        },
        {
            path: '/about',
            component: About,
                meta: {
                    auth: undefined
                }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                auth: false
            }
        },        
        {
            path: '/login',
            name: 'login',
            component: Login,
                meta: {
                    auth: false
                }
        },

        // USER ROUTES
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth: true
            }
        },

        // ADMIN ROUTES
        {
            path: '/admin',
            name: 'admin.dashboard',
            component: AdminDashboard,
            meta: {
                auth: {
                    roles: 2,
                    redirect: {
                        name: 'login'
                    },
                    forbiddenRedirect: '/403'
                }
            }
        },
        // {
        //     path: '/test',
        //     component: Test
        // }, 
        // {
        //     path: '/admin',
        //     component: AdminPanel,
        //     meta: {
        //         requiresAuth: true
        //     }
        // },
    ];

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
})
export default router