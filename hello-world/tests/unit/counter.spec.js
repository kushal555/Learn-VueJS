import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe('Counter.vue', ()=>{
    it('Check the counter value is increased after the button pressed',()=>{
        const wrapper = shallowMount(Counter);
        expect(wrapper.vm.counter).toBe(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.counter).toBe(1);
    });
})