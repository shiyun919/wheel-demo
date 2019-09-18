const expect = chai.expect;
 import Vue from 'vue'
 import Row from '../src/row'
 import Col from '../src/col'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Col', () => {
     it('存在.', () => {
         expect(Row).to.be.ok
     })
     it('接收 span 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
         propsData: {
             span: 1
         }
         }).$mount(div)
         const element = vm.$el
         expect(element.classList.contains('col-1')).to.eq(true)
         vm.$el.remove()
         vm.$destroy()
    })
    it('接收 offset 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
         propsData: {
             offset: 1
         }
         }).$mount(div)
         const element = vm.$el
         expect(element.classList.contains('offset-1')).to.eq(true)
         vm.$el.remove()
         vm.$destroy()
    })
    it('接收 PC 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
         propsData: {
             pc: {span: 1, offset: 1}
         }
         }).$mount(div)
         const element = vm.$el
         expect(element.classList.contains('col-pc-1')).to.eq(true)
         expect(element.classList.contains('offset-pc-1')).to.eq(true)
         vm.$el.remove()
         vm.$destroy()
    })
    it('接收 ipad 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
         propsData: {
             ipad: {span: 1, offset: 1}
         }
         }).$mount(div)
         const element = vm.$el
         expect(element.classList.contains('col-ipad-1')).to.eq(true)
         expect(element.classList.contains('offset-ipad-1')).to.eq(true)
         vm.$el.remove()
         vm.$destroy()
    })
    it('接收 narrower-pc 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
         propsData: {
            narrowerPc: {span: 1, offset: 1}
         }
         }).$mount(div)
         const element = vm.$el
         expect(element.classList.contains('col-narrowerPc-1')).to.eq(true)
         expect(element.classList.contains('offset-narrowerPc-1')).to.eq(true)
         vm.$el.remove()
         vm.$destroy()
    })
 })
