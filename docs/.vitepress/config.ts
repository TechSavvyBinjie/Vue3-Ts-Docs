import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs 
export default defineConfig({
    title:"Vue3-Typescript 学习文档",
    description:"详细学习Vue3-Typescript 的指南",
    themeConfig:{
        nav:[
            {text:"首页",link:"/"},
            {text:"构建站点",link:"/guide/"},
            {text:"ts",link:"/components/"},
            {text:"Vue",link:"/api/"},
            {text:"Vueuse",link:"/faq/"}
        ],
        socialLinks:[
            {icon:"github",link:"https://github.com/vuejs/vitepress"} 
        ],
        sidebar:{
            "/guide/": [
              {
                text: "VitePress学习",
                collapsible: true,
                items: [
                  {text: "介绍",link: "/guide/"},
                  {
                    text: "使用 VitePress 构建自己的学习站点",
                    link: "/guide/installation"
                  },
                  {
                    text: "基本概念",
                    link: "/guide/concepts"
                  }
                ],
              },
            ],
            "/components/": [
              {
                text: "ts学习",
                items: [
                  {
                    text: "介绍",
                    link: "/components/"
                  },
                  {
                    text: "基础语法",
                    link: "/components/ts"
                  },
                  {
                    text: "ts的深入",
                    link: "/components/form"
                  }
                ],
              }
            ],
            "/api/": [
              {
                text: "Vue学习",
                items: [
                  {
                    text: "介绍",
                    link: "/api/"
                  },
                  {
                    text: "Vue3基础学习",
                    link: "/api/Vue"
                  }
                ]
              }
            ],
            "/faq/": [
              {
                text: "VueUse学习",
                items: [
                  {
                    text: "介绍",
                    link: "/faq/"
                  },
                  {
                    text: "vueuse",
                    link: "/faq/Vueuse"
                  }
                ]
              }
            ]
        },
        footer: {
            message: "用心学习 Vue 3和 TypeScript!",
            copyright: "Copyright© 2024 yangfan"
          }
    }
})