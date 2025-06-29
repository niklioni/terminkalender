<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <!-- Anfang: Template für die Calendar-Week-Component -->
        <component :is="activeView" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4"><CalendarEntry /></div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button
            class="btn btn-lg mb-2"
            :class="buttonSettingsClasses"
            @click="toggleDisplaySettings()"
          >
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <!-- Anfang: Template für die Calendar-Settings-Component -->
        <CalendarSettings v-if="displaySettings" />
        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import CalendarWeek from "@/components/CalendarWeek.vue";
import CalendarWeekAsList from "@/components/CalendarWeekAsList.vue";
import CalendarEntry from "@/components/CalendarEntry.vue";
import Store from "./store";
// import CalendarSettings from "@/components/CalendarSettings.vue";
export default {
  name: "App",
  components: {
    CalendarEntry,
    CalendarWeek,
    CalendarWeekAsList,
    CalendarSettings: defineAsyncComponent(() => {
      return import("./components/CalendarSettings.vue");
    }),
  },
  data() {
    return {
      displaySettings: false,
    };
  },
  computed: {
    buttonSettingsClasses() {
      return this.displaySettings ? ["btn-sucess"] : ["btn-outline-success"];
    },
    activeView() {
      return Store.getters.activeView();
    },
  },
  methods: {
    toggleDisplaySettings() {
      this.displaySettings = !this.displaySettings;
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

.square {
  width: 40px;
  height: 40px;
}
</style>
