import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdInfo} from 'react-icons/md'
import {IoMdWarning} from 'react-icons/io'
import Notification from '../Notification/Notification'

import './index.css'

const notificationsList = [
  {
    id: 1,
    image: 'AiFillCheckCircle',
    title: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    image: 'RiErrorWarningFill',
    title: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    image: 'MdWarning',
    title: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    image: 'MdInfo',
    title: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <>
    <h1>Alert Notifications</h1>
    <ul>
      <Notification>
        <AiFillCheckCircle />
        <h1>{notificationsList[0].title}</h1>
        <p>{notificationsList[0].description}</p>
      </Notification>
      <Notification>
        <RiErrorWarningFill />
        <h1>{notificationsList[1].title}</h1>
        <p>{notificationsList[1].description}</p>
      </Notification>
      <Notification>
        <IoMdWarning />
        <h1>{notificationsList[2].title}</h1>
        <p>{notificationsList[2].description}</p>
      </Notification>
      <Notification>
        <MdInfo />
        <h1>{notificationsList[3].title}</h1>
        <p>{notificationsList[3].description}</p>
      </Notification>
    </ul>
  </>
)
export default AlertNotifications
