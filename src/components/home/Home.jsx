import './home.css'
import Social from './elements/Social'
import Data from './elements/Data'
import ScrollDown from './elements/ScrollDown'

export default function Home() {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />

            </div>

            <ScrollDown />
        </div>
    </section>
  )
}
