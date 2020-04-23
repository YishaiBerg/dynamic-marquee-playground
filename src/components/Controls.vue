<template>
  <div>
    <v-card color="green darken-1" class="mt-2" dark>
      <v-card-title>Props:</v-card-title>
      <v-card-subtitle>Expand rows to control</v-card-subtitle>
    </v-card>
    <v-data-table
      :items="tableItems"
      item-key="name"
      :headers="tableHeaders"
      hide-default-footer
      show-expand
      :expanded.sync="expanded"
    >
      <template #item.type="{item}">
        <code>{{item.type}}</code>
      </template>
      <template #item.default="{item}">
        <code>{{item.default}}</code>
      </template>
      <template v-slot:expanded-item="{item}">
        <td>
          <direction
            v-if="item.name === 'direction'"
            @change-direction="$emit('change-direction', $event)"
            :key="item.name"
          />
          <v-switch
            v-else-if="item.name === 'reverse'"
            :input-value="reverse"
            @change="$emit('change-reverse', $event)"
            label="reverse"
            :key="item.name"
          ></v-switch>
          <v-switch
            v-else-if="item.name === 'repeat'"
            :input-value="repeat"
            @change="$emit('change-repeat', $event)"
            label="repeat"
            :key="item.name"
          ></v-switch>
          <v-text-field
            v-else-if="item.name === 'repeatMargin'"
            label="repeatMargin"
            @input="$emit('change-repeat-margin', +$event)"
            :value="repeatMargin"
            :key="item.name"
            :rules="txtRules"
            outlined
            class="mt-4"
          ></v-text-field>
          <v-switch
            v-else-if="item.name === 'pause'"
            :input-value="pause"
            @change="$emit('change-pause', $event)"
            label="pause"
            :key="item.name"
          ></v-switch>
          <v-switch
            v-else-if="item.name === 'hoverPause'"
            :input-value="hoverPause"
            @change="$emit('change-hover-pause', $event)"
            label="hoverPause"
            :key="item.name"
          ></v-switch>
          <div
            v-else-if="item.name === 'speed'"
            :key="item.name"
            class="d-flex justify-content-center"
          >
            <v-radio-group :value="speed.type" @change="$emit('change-speed-type', $event)">
              <v-radio label="pps" value="pps"></v-radio>
              <v-radio label="duration" value="duration"></v-radio>
            </v-radio-group>
          </div>
        </td>
        <td v-if="item.name === 'speed'">
          <v-text-field
            label="number"
            @input="$emit('change-speed-number', +$event)"
            :value="speed.number"
            :rules="txtRules"
            outlined
            class="mt-4"
          ></v-text-field>
        </td>
      </template>
    </v-data-table>
        <v-card color="green darken-1" dark class="mt-4">
      <v-card-title>Dimensions:</v-card-title>
    </v-card>
    <blockquote class="blockquote">The component should be able to accomodate for any changes in wrapper or slot content dimensions that take place on the fly. Number of times to repeat slots will be recalculated, and margin between them will be unharmed.</blockquote>
    <el-num :elNum="elNum" @change-elnum="$emit('change-elnum', $event)" />
    <wrapper-dimension
      :width="width"
      :height="height"
      @change-width="$emit('change-wrapper-width', $event)"
      @change-height="$emit('change-wrapper-height', $event)"
    />
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
    speed: {
      type: Object,
      default() {
        return {
          type: "pps",
          number: 100
        };
      },
      validator(val) {
        return (
          val.type &&
          ["pps", "duration"].includes(val.type) &&
          val.number &&
          !isNaN(val.number)
        );
      }
    },
    repeat: {
      type: Boolean,
      default: true
    },
    repeatMargin: {
      type: Number,
      default: 10
    },
    hoverPause: {
      type: Boolean,
      default: true
    },
    pause: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "column",
      validator(val) {
        return ["column", "row"].includes(val);
      }
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableHeaders: [
        { text: "Name", value: "name", sortable: false },
        { text: "Type", value: "type", sortable: false },
        { text: "Default", value: "default", sortable: false },
        { text: "Explanation", value: "explanation", sortable: false },
        { text: "", value: "data-table-expand" }
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
          explanation:
            "By default the slot will translate according to document flow - top to bottom for {direction: 'column'} and and for {direction: 'row'} in accordance to ltr-rtl direction style of the wrapper. This behaviour can be reversed with this prop."
        },
        {
          name: "repeat",
          type: "boolean",
          default: "true",
          explanation:
            "If true the slot will repeat itself so as not to leave whitespace as the slot is finishing to translate out of the wrapper. The component will compute the number of times to repeat the slot in accordance with the repeatMargin prop."
        },
        {
          name: "repeatMargin",
          type: "number",
          default: "10",
          explanation: "Pixels between repeated slots."
        },
        {
          name: "speed",
          type: "{type: 'pps'|'duration', number: number}",
          default: "{type: 'pps', number: 100}",
          explanation:
            "There are two ways to define the translation speed. When choosing 'pps', 'number' is number of pixels per second. When choosing 'duration', 'number' is the number of milliseconds in which the slot will translate from the begining to the end of the wrapper element."
        },
        {
          name: "hoverPause",
          type: "boolean",
          default: "true",
          explanation:
            "Should animation pause upon hovering over wrapper element."
        },
        {
          name: "pause",
          type: "boolean",
          default: "false",
          explanation: "Use to programmaticlly pause animation."
        }
      ],
      expanded: [],
      txtRules: [
        (v: string) => !isNaN(+v) || "Value must be a number",
        (v: string) => +v >= 0 || "Value cannot be a negative number"
      ]
    };
  }
});
</script>
