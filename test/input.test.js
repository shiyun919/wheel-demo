const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {
     it('存在.', () => {
         expect(Input).to.be.ok   //期待input组件存在
     })

     //测试属性
     describe('props', ()=>{
        it('可以接收value.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
            propsData: {
                value: '1234'
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            vm.$destroy()
        })
        it('可以接收disabled.', () => {
           const Constructor = Vue.extend(Input)
           const vm = new Constructor({
           propsData: {
               disabled: true
           }
           }).$mount()
           const inputElement = vm.$el.querySelector('input')
           expect(inputElement.disabled).to.equal(true)
           vm.$destroy()
       })
       it('可以接收readonly.', () => {
           const Constructor = Vue.extend(Input)
           const vm = new Constructor({
           propsData: {
               readonly: true
           }
           }).$mount()
           const inputElement = vm.$el.querySelector('input')
           expect(inputElement.readOnly).to.equal(true)
           vm.$destroy()
       })
       it('可以接收error', () => {
           const Constructor = Vue.extend(Input)
           const vm = new Constructor({
           propsData: {
               error: '你输入有错误'
           }
           }).$mount()
           const useElement = vm.$el.querySelector('use')
           expect(useElement.getAttribute('xlink:href')).to.equal('#i-gantanhao')
   
           const errorMassage = vm.$el.querySelector('.errorMessage')
           expect(errorMassage.innerText).to.equal('你输入有错误')
           vm.$destroy()
       })
     })
     

     //测试事件
     describe('事件', ()=>{
        //用forEach循环
        it('支持change/input/focus/blur事件.', () => {
           ['change', 'input', 'focus', 'blur'].forEach((eventName)=>{
                const Constructor = Vue.extend(Input)
                const vm = new Constructor({
            
                }).$mount()

                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //触发change事件
                let event = new Event(eventName)   //声明触发change时的事件
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.called.calledWith(event)   //预期被召唤回调并调用，同时调出change事件的第一个参数
           })
            
        })




        // it('支持change事件.', () => {
        //     const Constructor = Vue.extend(Input)
        //     const vm = new Constructor({
            
        //     }).$mount()

        //     const callback = sinon.fake();
        //     vm.$on('change', callback)
        //     //触发change事件
        //     let event = new Event('change')   //声明触发change时的事件
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.called.calledWith(event)   //预期被召唤回调并调用，同时调出change事件的第一个参数
        // })
        // it('支持input事件.', () => {
        //     const Constructor = Vue.extend(Input)
        //     const vm = new Constructor({
            
        //     }).$mount()

        //     const callback = sinon.fake();
        //     vm.$on('input', callback)
        //     //触发change事件
        //     let event = new Event('input')   //声明触发change时的事件
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.called.calledWith(event)   //预期被召唤回调并调用，同时调出change事件的第一个参数
        // })
        // it('支持focus事件.', () => {
        //     const Constructor = Vue.extend(Input)
        //     const vm = new Constructor({
            
        //     }).$mount()

        //     const callback = sinon.fake();
        //     vm.$on('focus', callback)
        //     //触发change事件
        //     let event = new Event('focus')   //声明触发change时的事件
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.called.calledWith(event)   //预期被召唤回调并调用，同时调出change事件的第一个参数
        // })
        // it('支持blur事件.', () => {
        //     const Constructor = Vue.extend(Input)
        //     const vm = new Constructor({
            
        //     }).$mount()

        //     const callback = sinon.fake();
        //     vm.$on('blur', callback)
        //     //触发change事件
        //     let event = new Event('blur')   //声明触发change时的事件
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.called.calledWith(event)   //预期被召唤回调并调用，同时调出change事件的第一个参数
        // })
    })
 })
