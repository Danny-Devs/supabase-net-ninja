import { Link } from "react-router-dom"

const SmoothieCard = ({ smoothie }) => {
  return (
    <div className='smoothie-card'>
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className='rating'>{smoothie.rating}</div>
      <div className='buttons'>
        <Link to={'/' + smoothie.id}>
          <svg width='1em' height='1em' viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z'
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default SmoothieCard