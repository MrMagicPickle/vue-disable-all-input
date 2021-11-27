# vue-disable-all-input

A VueJs directive that allows you to disable/enable all input elements under a parent element


You may run into a scenario where you would want all input elements in a specific section to be disabled together. For example, clicking a button should disable all input elements in a form. In this case, instead of manually setting the disable attribute for each input element, you can bind `v-disable-all-input` to the container element and simply toggle that flag instead.


## Install
```bash
$ npm i vue-disable-all-input
# or
$ yarn add vue-disable-all-input
```

## Usage

```javascript
import Vue from 'vue'
import VueDisableAllInput from 'vue-disable-all-input'

Vue.use(VueDisableAllInput)
```

Add `v-disable-all-input` as an attribute on the parent element containing children input elements that you wish to disable/enable

```vue
<template>
  <div>
    <div v-disable-all-input="isDisabled">
        <input type="text" />
        <div class="child-div">
          <button> Click me </button>
          <input type="textarea" />
        </div>
        <input type="checkbox" />
        <div contenteditable="true">
          Editable Div
        </div>
    </div>
    <button @click="isDisabled = !isDisabled"> Toggle Disable </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDisabled: false
    }
  }
}
</script>
```

### Apply to components

You can also add `v-disable-all-input` to a component, which will apply the disable/enable input logic to all child components recursively.

<b> Parent Component </b>
```vue
<template>
  <div>
    <button @click="isDisabled = !isDisabled"> Toggle </button>
    <ChildComponent v-disable-all-input="isDisabled" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      isDisabled: false
    }
  }
}
</script>
```

<b> Child Component </b>
```vue
<template>
  <div>
    <div contenteditable="true">
      Content Editable Div
    </div>
    <input type="text"/>
    <input type="checkbox"/>
    <button> Click me </button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent'
}
</script>
```
