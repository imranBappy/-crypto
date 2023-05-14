


const routers = [
    {
        path: '/', router: require('./currencyRoutes')
    }
]

const setRoutes = (app) => {
    routers.forEach((r) => app.use(r.path, r.router))

}
module.exports = setRoutes;