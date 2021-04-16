import { shallowMount } from '@vue/test-utils';
import Greeting from "@/components/Greeting.vue";

describe('Greeting.vue', ()=> {
    it('render a greeting message', ()=> {
        const wrapper = shallowMount(Greeting);
        expect(wrapper.find('h2').text()).toMatch(wrapper.vm.greeting)
    });
})