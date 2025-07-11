import { calendarWeekData } from "@/seed";
import { reactive, readonly } from "vue";

const state = reactive({ calendarWeekData, activeView: "CalendarWeek" });

const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active),
  activeView: () => state.activeView,
};

const mutations = {
  editEvent(dayId, eventTitle) {
    state.calendarWeekData.map((dayObj) => {
      dayObj.events.map((event) => (event.edit = false));
    });
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find((event) => event.title === eventTitle);
    eventObj.edit = true;
  },
  deleteEvent(dayId, eventTitle) {
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventIndex = dayObj.events.findIndex(
      (event) => event.title === eventTitle,
    );
    dayObj.events.splice(eventIndex, 1);
  },
  updateEvent(dayId, oldEventTitle, newEvent) {
    newEvent.title = newEvent.title !== "" ? newEvent.title : oldEventTitle;
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find(
      (event) => event.title === oldEventTitle,
    );
    eventObj.title = newEvent.title;
    eventObj.priority = Number(newEvent.priority);
    eventObj.edit = false;
  },
  setActiveDay(dayId) {
    state.calendarWeekData.map((dayObj) => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
  setActiveView(view) {
    state.activeView = view;
  },
  storeEvent(eventTitle, eventPriority, eventDay, eventColor) {
    const obj = {
      title: eventTitle,
      edit: false,
      color: eventColor,
      priority: Number(eventPriority),
    };
    console.log(obj);
    state.calendarWeekData
      .find((day) => day.fullName === eventDay)
      .events.push(obj);
  },
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
