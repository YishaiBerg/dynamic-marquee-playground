<template>
  <div>
    <v-card color="cyan">
      <v-card-title>Dimensions:</v-card-title>
    </v-card>
    <el-num :elNum="elNum" @change-elnum="$emit('change-elnum', $event)" />
    <wrapper-dimension
      :width="width"
      :height="height"
      @change-width="$emit('change-wrapper-width', $event)"
      @change-height="$emit('change-wrapper-height', $event)"
    />
    <v-card color="cyan" class="mt-8">
      <v-card-title>Props:</v-card-title>
      <v-card-subtitle>Expand to control</v-card-subtitle>
    </v-card>
    <v-data-table :items="tableItems" :headers="tableHeaders" hide-default-footer show-expand>
        <template #expanded-item="{item}">
<direction @change-direction="$emit('change-direction', $event)"/>
<!-- hi -->
        </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ElNum from "./ElNum.vue";
import WrapperDimension from "./WrapperDimension.vue";
import Direction from "./Direction.vue";
export default Vue.extend({
  name: "controls",
  components: {
    ElNum,
    WrapperDimension,
    Direction
  },
  props: {
    elNum: {
      type: Number,
      default: 1
    },
    width: {
      type: Number,
      default: 25
    },
    height: {
      type: Number,
      default: 40
    },
    direction: {
        type: String,
        default: 'column'
    }
  },
  data() {
      return {
          tableHeaders: [
              {text: "Name", value: "name", sortable: false},
              {text: "Type", value: "type", sortable: false},
              {text: "Default", value: "default", sortable: false},
              {text: "Explanation", value: "explanation", sortable: false},
          ],
          tableItems: [
              {
                  name: "direction",
                  type: "'row'|'column'",
                  default: "'column'",
                  explanation: "animation direction"
              },
              {
                  name: "reverse",
                  type: "boolean",
                  default: "false",
                  explanation: "By default the slot will translate according to document flow - top to bottom for {direction: 'column'} and and for {direction: 'row'} in accordance to ltr-rtl direction style of the wrapper. This behaviour can be reversed with this prop."
              },
              {
                  name: "repeat",
                  type: "boolean",
                  default: "true",
                  explanation: "If true the slot will repeat itself so as not to leave whitespace as the slot is finishing to translate out of the wrapper. The component will compute the number of times to repeat the slot in accordance with the repeatMargin prop."
              },
              {
                  name: "repeatMargin",
                  type: "number",
                  default: "10",
                  explanation: "Pixels between repeated slots."
              },
              {
                  name: "speed",
                  type: "{type: 'pps'|'duration',number: number}",
                  default: "{type: 'pps',number: 100}",
                  explanation: "There are two ways to define the translation speed. When choosing 'pps', 'number' is number of pixels per second. When choosing 'duration', 'number' is the number of milliseconds in which the slot will translate from the begining to the end of the wrapper element."
              },
              {
                  name: "hoverPause",
                  type: "boolean",
                  default: "true",
                  explanation: "Should animation pause upon hovering over wrapper element."
              },
              {
                  name: "pause",
                  type: "boolean",
                  default: "false",
                  explanation: "Use to programmaticlly pause animation."
              },
          ]
      }
  },
});
</script>
