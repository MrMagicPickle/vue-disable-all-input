<template>
  <div class="foo">
    Unit Test
    <button @click="isDisable = !isDisable">
      Toggle Disable
    </button>
    <div v-disable-all-input="isDisable">

      <label>
        Text input
      </label>
      <input class="text-input" type="text"/>

      <label>
        Checkbox input
      </label>
      <input class="checkbox-input" type="checkbox"/>

      <button class="button-input">
        Button Input
      </button>

      <div class="child">
        <div class="edit-div" contenteditable="true">
          ContentEditable Input
        </div>

        <label>
          TextArea input
        </label>
        <input class="textarea-input" type="textarea"/>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data() {
    return {
      isDisable: false,
    }
  }
}
</script>
