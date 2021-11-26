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
      <input type="text"/>

      <label>
        Checkbox input
      </label>
      <input type="checkbox"/>

      <button>
        Button Input
      </button>

      <div class="child">
        <div contenteditable="true">
          ContentEditable Input
        </div>

        <label>
          Checkbox input
        </label>
        <input type="textarea"/>

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
