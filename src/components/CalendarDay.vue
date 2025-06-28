<script>
import CalendarEvent from "@/components/CalendarEvent.vue";
import Store from "../store";

export default {
  name: "CalendarDay",
  components: { CalendarEvent },
  props: {
    day: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: -1,
          fullName: "Fehlender Wochentag",
          events: [],
        };
      },
      validator: function (value) {
        if (Object.keys(value).includes("id")) {
          return true;
        }
      },
    },
  },
  computed: {
    cardClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["border-primary"]
        : null;
    },
    cardHeaderClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["bg-primary", "text-white"]
        : null;
    },
  },
  methods: {
    setActiveDay() {
      Store.mutations.setActiveDay(this.day.id);
    },
  },
};
</script>

<template>
  <div class="card border-start" :class="cardClasses">
    <div
      class="card-header text-center"
      :class="cardHeaderClasses"
      role="button"
      @click="setActiveDay"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <CalendarEvent
        v-for="event in day.events"
        :key="event.title"
        :event="event"
        :day="day"
      >
        <template #eventPriority="slotProps">
          {{ slotProps.priorityDisplayName }}
        </template>
        <!--        <template v-slot:eventPriority> Priorität </template>-->
        <template v-slot="slotProps"> {{ slotProps.event.title }}</template>
      </CalendarEvent>
    </div>
  </div>
</template>

<style scoped></style>
