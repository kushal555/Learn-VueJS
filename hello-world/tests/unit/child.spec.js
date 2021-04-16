import { shallowMount } from "@vue/test-utils";
import Child from '@/components/Child.vue';

describe('Child.vue', ()=> {
    it('Should emit an event on Button Click', ()=>{
        const wrapper = shallowMount(Child);
        // either you can trigger the click or you can directly call the method
        wrapper.vm.changeAge();
        expect(wrapper.emitted().ageWasChanged[0]).toEqual([23]);
    });
});