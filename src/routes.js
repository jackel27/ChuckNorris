export default [
  {
    path: '/',
    name: 'landing',
    component: require('components/Landing')
  },
  // {
  //   path: '/somesubpage',
  //   name: 'some-sub-page',
  //   component: require('components/SomeSubPage')
  // }
  {
    path: '*',
    redirect: '/'
  }
]
