<script>
import CalendarDay from "@/components/CalendarDay.vue";
import Store from "../store";

export default {
  name: "CalendarWeek",
  components: { CalendarDay },
  data() {
    return { calendarWeekData: Store.state.calendarWeekData };
  },
};
</script>
<template>
  <div id="calender-week">
    <div class="card-group">
      <CalendarDay v-for="day in calendarWeekData" :key="day.id" :day="day" />
    </div>
  </div>
  <!-- Ende: Template für die Calendar-Week-Component -->
</template>

<style scoped></style>
