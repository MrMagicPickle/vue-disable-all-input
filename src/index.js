const disableAllInput = (el, binding) => {
  const tags = ['input', 'button', 'textarea', 'select', '[contenteditable]'];
  tags.forEach(tagName => {
    const nodes = el.querySelectorAll(tagName);
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].disabled = binding.value;
      if (nodes[i].tagName === 'DIV') {
        nodes[i].setAttribute('contenteditable', binding.value ? false : true);
      }
    }
  });
}

const disableAllInputDirective = () => {
  return {
    bind: disableAllInput,
    componentUpdated: disableAllInput,
  }
}

const plugin = {
  install (Vue) {
    Vue.directive('disable-all-input', disableAllInputDirective())
  },
  directive: disableAllInputDirective(),
}

export default plugin;
