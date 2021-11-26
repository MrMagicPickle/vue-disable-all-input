import { createLocalVue, shallowMount } from '@vue/test-utils'
import Foo from './Foo.vue';
import VueDisableAllInput from '../../src/index';

const localVue = createLocalVue();
localVue.use(VueDisableAllInput);

describe('Disable All Input Directive', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Foo, {
      localVue,
    });
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should disable inputs when binding argument is true', async () => {
    // const { vm } = wrapper;
    await wrapper.setData({ isDisable: true });
    console.log(wrapper.text());
    const input = wrapper.find('input[type="text"]');
    console.log(input, input.attributes(), input.element, '<< input');
    expect(wrapper.vm.isDisable).toBe(true);
  });
});
