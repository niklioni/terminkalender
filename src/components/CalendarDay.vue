<script>
import CalendarEvent from "@/components/CalendarEvent.vue";
export default {
  name: "CalendarDay",
  components: { CalendarEvent },
  props: {
    day: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header text-center" role="button">
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <CalendarEvent />
    </div>
  </div>
</template>

<style scoped></style>
