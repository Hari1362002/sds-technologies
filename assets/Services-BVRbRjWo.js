import{u as a,j as e}from"./index-CYmerk9Z.js";import{s as r}from"./services-DNi67-L0.js";function i(){const s=a();return e.jsx("section",{id:"services",className:"relative py-20 bg-gradient-to-br from-white via-orange-50 to-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6",children:["Our"," ",e.jsx("span",{className:"bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent",children:"Services"})]}),e.jsx("p",{className:"text-lg md:text-xl font-semibold max-w-2xl mx-auto leading-relaxed",children:e.jsx("span",{className:"bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",children:"Powerful digital solutions designed to grow your business and build future-ready careers."})})]}),e.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:r.map(t=>e.jsxs("div",{onClick:()=>s(`/services/${t.slug}`),className:`
                cursor-pointer group
                bg-white rounded-2xl overflow-hidden
                border border-orange-200/50
                shadow-md hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-2
              `,children:[e.jsxs("div",{className:"relative h-52 overflow-hidden",children:[e.jsx("img",{src:t.coverImage,alt:t.title,className:`
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  `}),e.jsx("div",{className:`
                    absolute inset-0
                    bg-gradient-to-br from-orange-500/80 to-orange-600/80
                    opacity-0 group-hover:opacity-100
                    transition flex items-center justify-center
                  `,children:e.jsx("span",{className:"text-white font-semibold text-lg",children:"View Details →"})})]}),e.jsxs("div",{className:"p-5",children:[e.jsx("h3",{className:"text-2xl font-bold text-orange-600 mb-2",children:t.title}),e.jsx("p",{className:"text-slate-600 leading-relaxed",children:t.shortDesc})]})]},t.slug))})]})})}export{i as default};
