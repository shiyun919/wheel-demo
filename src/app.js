import Vue from 'vue'
import Button from './button'
import Icon from  './icon'
import buttonGroup from  './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Tabs from './tabs'
import tabsNav from './tabs-nav'
import tabsItem from './tabs-item'
import tabsBody from './tabs-body'
import tabsPane from './tabs-pane'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-nav', tabsNav)
Vue.component('g-tabs-item', tabsItem)
Vue.component('g-tabs-body', tabsBody)
Vue.component('g-tabs-pane', tabsPane)


new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports',
        loading1: false,
        loading2: false,
        loading3: false
    },
    methods: {
        inputChange: function(e){
            console.log(e.target.value)
        }
    }
})







