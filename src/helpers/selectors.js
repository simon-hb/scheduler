export function getAppointmentsForDay(state, name) {
  //iterate through filteredDays
  //compare where appointments.id === days.appointments
  const foundDay = state.days.filter((day) => day.name === name)[0];
  return foundDay ? foundDay.appointments.map((appointment) => state.appointments[appointment]) : [];
}