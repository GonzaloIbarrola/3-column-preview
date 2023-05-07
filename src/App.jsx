import './App.css';
import IconLuxury from "./assets/images/icon-luxury.svg";
import IconSedans from "./assets/images/icon-sedans.svg";
import IconSuvs from "./assets/images/icon-suvs.svg";

function App() {
  const items = [
    {
      img : IconSedans,
      title : 'Sedans',
      description : 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      background: 'bg-SedansBG',
      buttonText: 'text-SedansBG'
    },
    {
      img : IconSuvs,
      title : 'Suvs',
      description : 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      background: 'bg-SuvsBG',
      buttonText: 'text-SuvsBG'
    },
    {
      img : IconLuxury,
      title : 'Luxury',
      description : 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      background: 'bg-LuxuryBG',
      buttonText: 'text-LuxuryBG'
    }
    
  ]
  return (
    <main>
      <section>
      {items.map((item,i) => 
        <article className={`lg:h-[500px] h-[442px] flex items-center justify-center lg:w-[307px] w-full p-12 ${item.background}`} key={i}>
          <div className='flex flex-col gap-[25px] w-[231px]'>
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className={`${item.buttonText}`}>Learn More</button>
          </div>
        </article>
      )}
      </section>
    </main>
  )
}

export default App
