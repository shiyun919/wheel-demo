import Vue from 'vue'
import Button from './button'
import Icon from  './icon'
import buttonGroup from  './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})








//单元测试

import chai from 'chai'
import { brotliDecompressSync } from 'zlib';
const expect = chai.expect

//测试Button 的icon用例
{
    console.log(Button)  //这个Button是对象
    const Constructor = Vue.extend(Button)  //把对象Button变成函数
    const button = new Constructor({  //new出一个新函数 ,构造出新实例
        propsData: {
            icon: 'settings'    //给按钮传icon
            }
        })  
        
    //button.$mount('#test')  //把button放进in为test的div内   （动态生成按钮）
    button.$mount()   //可以不把测试用例放到页面上，直接放到内存中
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')    //期望xlink:href 等于 #i-settings
     //测试完成后，清除记录（战场）
     button.$el.remove()
     button.$destroy()
}

//测试Button 的loading用例
{
    console.log(Button)  
    const Constructor = Vue.extend(Button)  
    const button = new Constructor({  
        propsData: {
            icon: 'settings',   
            loading: true
            }
        })  
        
    button.$mount()   
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')    
        //测试完成后，清除记录（战场）
     button.$el.remove()
     button.$destroy()
}


//测试Button 的svg里CSS样式order用例 (iconPosition为空时)
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    console.log(Button)  
    const Constructor = Vue.extend(Button)  
    const button = new Constructor({  
        propsData: {
            icon: 'settings',
            iconPosition: ''
            }
        })  
        
    button.$mount(div)   
    let svg = button.$el.querySelector('svg')
    console.log(svg)
    let order = window.getComputedStyle(svg).order   //获取svg样式order
    expect(order).to.eq('1')
    
    //测试完成后，清除上面创建的div
    button.$el.remove()
    button.$destroy()

}


//测试Button 的svg里CSS样式order用例 (iconPosition为left时)
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    console.log(Button)  
    const Constructor = Vue.extend(Button)  
    const button = new Constructor({  
        propsData: {
            icon: 'settings',
            iconPosition: 'left'
            }
        })  
        
    button.$mount(div)   
    let svg = button.$el.querySelector('svg')
    console.log(svg)
    let order = window.getComputedStyle(svg).order   //获取svg样式order
    expect(order).to.eq('1')  
    
     //测试完成后，清除上面创建的div
     button.$el.remove()
     button.$destroy()

}


//测试Button 的svg里CSS样式order用例 (iconPosition为right时)
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    console.log(Button)  
    const Constructor = Vue.extend(Button)  
    const button = new Constructor({  
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
            }
        })  
        
    button.$mount(div)   
    let svg = button.$el.querySelector('svg')
    console.log(svg)
    let order = window.getComputedStyle(svg).order   //获取svg样式order
    expect(order).to.eq('2')   
    
     //测试完成后，清除上面创建的div
     button.$el.remove()
     button.$destroy()

}