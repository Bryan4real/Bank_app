import { card } from "../assets"; 
import styles, {layout} from "../style";
import Button from "./Button";



const CardDeal = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Find a better card deal <br className="sm:block hidden"/> In afew steps. 
          </h2>
          <p className={`${styles.paragraph} max-w-[470px]} mt-5`}>
          fully responsive, expertly crafted component examples you can drop into your 
          Tailwind projects and customize to your heart’s content.
          </p>
          <Button className="mt-10"/>
        </div>
        <div className={layout.sectionImg}>
          <img src={card} alt="card" className="w-[100%] h-[100%]"/>
        </div>
    </section>
  )
}

export default CardDeal