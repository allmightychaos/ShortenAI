// import logo.png from assets
import logo from '../assets/shortenai-logo-dark.png'

const Hero = () => {

  return (
    <header className='w-full flex justify-center items-center flex-col'> 
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className='w-28 object-contain logo-header'/>

        <button
          type="button"
          onClick={() => window.open('https://almightychaos.dev', '_blank')}
          className='black-btn'
        >
          Portfolio
        </button>
      </nav>

      <h1 className="head-text">
        Summarize Articles <br/> with
        <span className="orange-gradient"> GPT-4</span>
      </h1>
      <h2 className="desc">
        <span>
          Simplify and speed up your reading, with ShortenAI, which transforms lengthy articles into short
          clear and concise summaries,
        </span>
      </h2>
      <h2 className="text-3xl purple-gradient">
        in seconds.
      </h2>
    </header>
  )
}

export default Hero