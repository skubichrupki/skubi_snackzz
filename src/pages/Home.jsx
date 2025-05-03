import skull from '../assets/skull.png'
import github from '../assets/github.png'
import leetcode from '../assets/leetcode.png'

const Home = () => {
  return (
    <div>
      <img src={skull}  alt="skull" className='social'/>
      <a href="https://github.com/skubichrupki" target="_blank">
            <img src={github} className="social" alt="github" />
      </a>
      <a href="https://leetcode.com/u/skubichrupki/" target="_blank">
            <img src={leetcode} className="social" alt="leetcode" />
      </a>
    </div>
  )
}

export default Home