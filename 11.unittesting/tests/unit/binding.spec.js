import { shallowMount } from "@vue/test-utils";
import Binding from "@/components/Binding.vue";

describe("Binding.vue", () => {
  it("When click on Red button it should change the value of ClassName to be a red", () => {
    var wrapper = shallowMount(Binding);

    wrapper.find("#red").trigger("click");
    expect(wrapper.vm.className).toBe("red");
  });

  it("When click on Green button it should change the value of ClassName to be a green", () => {
    var wrapper = shallowMount(Binding);

    wrapper.find("#green").trigger("click");
    expect(wrapper.vm.className).toBe("green");
  });

  it("When click on Blue button it should change the value of ClassName to be a blue", () => {
    var wrapper = shallowMount(Binding);

    wrapper.find("#blue").trigger("click");
    expect(wrapper.vm.className).toBe("blue");
  });
});
