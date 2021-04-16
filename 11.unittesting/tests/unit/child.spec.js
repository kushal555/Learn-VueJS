import { shallowMount } from '@vue/test-utils'
import Child from '@/components/Child.vue';

describe('Child.vue', () => {
    it('Should emit an event on Button Click', ()=> {
        const wrapper = shallowMount(Child);
        wrapper.vm.changeAge();
        expect(wrapper.emitted().ageWasChanged[0][0]).toEqual({ age: 23 });
    });
});
