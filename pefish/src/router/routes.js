
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
path:'/try',
component:() => import ('components/try.vue'),
children:[
  {
    path:'/productlist',
    component:() => import ('components/Productlist.vue'),
  }
]

},  
  {
    path:'/bers',
    component: () => import('pages/bers.vue'),
  /*    children:[
      {path:'/',component: () => import('components/productlist.vue')}
    ]   */

  },
  {
  path:'/pri',
  component:() => import ('pages/privilege.vue'),

  },
  {
  path:'/dashboard',
  component:() => import ('pages/Dashboard'),

  },
  {
  path:'/Home',
  component:() => import ('pages/Home.vue'),

  },
  {
  path:'',
  component:()=>import('pages/Dashboard.vue'),
  children:[
  {
  path:'/products',
  component:() => import ('pages/Products.vue'),

  },
  {
  path:'/OverView',
  component:() => import ('pages/OverView.vue'),

  },
  {
    path:'/EditProducts',
    component:() => import ('pages/EditProducts.vue'),
    
  }
]},
{  
  path:'/tesst',
  component:() => import ('components/tesst'),
  
},      
    {
  path:'/magni',
  component:() => import ('components/magni.vue'),

  },  
    {
  path:'/camel',
  component:() => import ('components/camel.vue'),

  },  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
 
  
]

export default routes
