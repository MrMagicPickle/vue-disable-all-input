import { createLocalVue, shallowMount } from '@vue/test-utils'
import Foo from './Foo.vue';
import VueDisableAllInput from '../../src/index';

const localVue = createLocalVue();
localVue.use(VueDisableAllInput);

describe('Disable All Input Directive Test Suite', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Foo, {
      localVue,
    });
  });

  it('should disable all inputs when binding argument is true', async () => {
    await wrapper.setData({ isDisable: true });
    const textInput = wrapper.find('.text-input');
    const checkboxInput = wrapper.find('.checkbox-input');
    const buttonInput = wrapper.find('.button-input');
    const textAreaInput = wrapper.find('.textarea-input');
    const contentEditableDiv = wrapper.find('.edit-div');
    expect(textInput.element.disabled).toBe(true);
    expect(checkboxInput.element.disabled).toBe(true);
    expect(buttonInput.element.disabled).toBe(true);
    expect(textAreaInput.element.disabled).toBe(true);
    expect(contentEditableDiv.attributes('contenteditable')).toBe('false');
  });

  it('should enable all inputs when binding argument is false', async () => {
    await wrapper.setData({ isDisable: false });
    const textInput = wrapper.find('.text-input');
    const checkboxInput = wrapper.find('.checkbox-input');
    const buttonInput = wrapper.find('.button-input');
    const textAreaInput = wrapper.find('.textarea-input');
    const contentEditableDiv = wrapper.find('.edit-div');
    expect(textInput.element.disabled).toBe(false);
    expect(checkboxInput.element.disabled).toBe(false);
    expect(buttonInput.element.disabled).toBe(false);
    expect(textAreaInput.element.disabled).toBe(false);
    expect(contentEditableDiv.attributes('contenteditable')).toBe('true');
  });
});
