import { shallowMount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', ()=>{
    it('render a greeting message', () => {
        var wrapper = shallowMount(Greeting);
        expect(wrapper.html().includes("Hello World")).toBe(true);
    });
});