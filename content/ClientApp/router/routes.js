import counterExample from 'components/counter-example'
import fetchData from 'components/fetch-data'
import homePage from 'components/home-page'
import pingPong from 'components/ping-pong'

export const routes = [
    { name: 'home', path: '/', component: homePage, display: 'Home', icon: 'home' },
    { name: 'counter', path: '/counter', component: counterExample, display: 'Counter', icon: 'graduation-cap' },
    { name: 'fetch-data', path: '/fetch-data', component: fetchData, display: 'Fetch data', icon: 'list' },
    { name: 'ping-pong', path: '/ping-pong', component: pingPong, display: 'Ping Pong', icon: 'list' }
];
