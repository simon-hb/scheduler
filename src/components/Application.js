import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "./DayList"
import Appointments from "components/Appointment";
import {getAppointmentsForDay} from "../helpers/selectors"
import "components/Application.scss";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  const setDay = (day) => setState({ ...state, day });
  // const setDays = (days) => setState(prev => ({ ...prev, days }));;

  useEffect(() => {
    //promise all ensures we get both data before we render because theyre very closely linked
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      //Promise.resolve(axios.get("/api/interviewers")),
    ]).then((all) => {
      //...prev makes sure all data is not overwritten, then replacing data with data we retrieved with axios get request
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data
        //,interviewers: all[2].data 
      }));
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {getAppointmentsForDay(state, state.day).map((appointment) => {
          console.log(appointment);
          return <Appointments key={appointment.id} {...appointment} />;
        })}
        <Appointments key="last" time={"5pm"} />
      </section>
    </main>
  );
}