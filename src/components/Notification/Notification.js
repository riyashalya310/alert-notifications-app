// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <li>
      {children}
      <GrFormClose />
    </li>
  )
}

export default Notification
