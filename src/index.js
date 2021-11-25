const disableAllInput = () => {
  return {
    componentUpdated: function(el, binding) {
      if (!binding.value) {
        return;
      }
      const tags = ["input", "button", "textarea", "select", '[contenteditable=true]'];
      tags.forEach(tagName => {
        const nodes = el.querySelectorAll(tagName);
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].disabled = true;
          nodes[i].tabIndex = -1;
        }
      });
    }
  }
}

const plugin = {
  install (Vue) {
    Vue.directive('disable-all-input', disableAllInput())
  },
  directive: disableAllInput()
}

export default plugin;
