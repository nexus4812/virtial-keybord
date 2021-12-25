<template>
  <div class="ui-keyboard ui-widget-content ui-widget ui-corner-all ui-helper-clearfix ui-keyboard-has-focus"
       role="textbox" style="top: 410.797px; left: 292.711px;" id="text_keyboard" data-ui-keyboard-layout="qwerty"
       data-ui-keyboard-language="en">
    <div class="ui-keyboard-preview-wrapper"><input type="text" placeholder=" Enter something..."
                                                    class="ui-widget-content ui-corner-all ui-autocomplete-input ui-keyboard-preview"
                                                    role="textbox" autocomplete="off" tabindex="-1"></div>
    <div class="ui-keyboard-keyset ui-keyboard-keyset-normal" style="display: inline-block;">
      <div v-for="row in keyboardValues" v-bind:key="row">
        <button v-for="key in row" v-bind:key="key.code" role="button" type="button" aria-disabled="false"
                class="ui-keyboard-button ui-keyboard-q ui-state-default ui-corner-all"
                v-bind:class="getKeyCapCssStyle(key.code)">
          <span class="ui-keyboard-text">{{ key.string }}</span>
        </button>
        <br class="ui-keyboard-button-endrow">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { keyboardValues } from '@/components/keyboard'
import keyCodes, { isActionKeyCode, typeKeyCode } from '@/components/keyCode'

const getKeyCapCssStyle = (keyCode: typeKeyCode): string => {
  let r = ''

  if (isActionKeyCode(keyCode)) {
    r += ' ui-keyboard-actionkey'
  }

  if (keyCodes.Space === keyCode) {
    r += ' ui-keyboard-space'
  }

  return r
}

export default defineComponent({
  setup () {
    return {
      keyboardValues,
      getKeyCapCssStyle
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/keyboard-dark.css";
</style>
