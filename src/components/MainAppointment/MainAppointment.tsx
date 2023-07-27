import SectionAppointment from "../SectionAppointment/SectionAppointment"
import icon from '../../assets/iconAppointment.png'
import s from './MainAppointment.module.css'

const APPOINTMENT = {
  services : [
    {
      image: icon,
      name: "Endodoncia",
      active: true
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    }
  ],
  title: 'Reserva tu cita en "La preventiva"',
  text: 'Suspendisse fermentum arcu eget risus auctor, vel pretium eros ultricies.'
} 
function MainAppointment(){
  return <main className={s.main}>
    <SectionAppointment services={APPOINTMENT.services} title={APPOINTMENT.title} text={APPOINTMENT.text}/>
  </main>
}
export default MainAppointment