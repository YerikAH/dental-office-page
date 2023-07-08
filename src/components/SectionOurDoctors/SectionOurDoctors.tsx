import CarouselCards from '../CarouselCards/CarouselCards'
import s from './SectionOurDoctors.module.css'
const TEST = [
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  }
]

function SectionOurDoctors(){
  return <section className={s.section}>
    <div className={s.section__contain}>
      <div className={s.section__contain__title}>
        <h3>Conoce a nuestros dentistas</h3>
        <div/>
      </div>
      <CarouselCards cards={TEST} />
    </div>
  </section>
}
export default SectionOurDoctors