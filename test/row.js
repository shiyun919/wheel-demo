const expect = chai.expect;
 import Vue from 'vue'
 import Row from '../src/row'
 import Col from '../src/col'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Row', () => {
     it('存在.', () => {
         expect(Row).to.be.ok
     })
     it('接收 gutter 属性.', (done) => {
         Vue.component('g-row', Row)   //注册全局组件
         Vue.component('g-col', Col)
        const div = document.creatElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-rpw guttre="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `
        const vm = new Vue ({
            el: div
        })
        console.log(vm.$el.outerHTML)
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paadingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paadingRight).to.eq('10px')
            console.log(vm.$el.outerHTML)
            done()
            vm.$el.remove()
            vm.$destroy()
        },0)  //0表示下一次打
    })
    it('接收 align 属性', ()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
         propsData: {
             align: 'center'
         }
         }).$mount(div)
         const element = vm.$el
         expect(getComputedStyle(element).justifyContent).to.eq('center')
         vm.$destroy()
    })
 })
