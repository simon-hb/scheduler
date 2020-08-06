export function getAppointmentsForDay(state, day) {
  //oneDay is object. Ex: if monday = monday then day is found, then return each appointment in an array
  const foundDay = state.days.find((oneDay) => day === oneDay.name);
  if(foundDay === undefined || state.days.length === 0) return [];
  return foundDay.appointments.map((id) => state.appointments[id]);
}