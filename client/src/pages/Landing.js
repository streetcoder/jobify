import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
           <Logo /> 
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                I'm baby big mood vice microdosing wayfarers glossier blue bottle. Hot chicken DIY truffaut gatekeep, jean shorts Brooklyn hoodie. Sriracha mumblecore venmo cupping, leggings palo santo ramps. 90's hoodie irony enamel pin pour-over tattooed. Fingerstache grailed subway tile man braid gastropub.
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>    
  )
}

export default Landing