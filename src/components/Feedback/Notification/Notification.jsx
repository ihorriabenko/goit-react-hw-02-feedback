import s from './notification.module.scss';

const Notification = ({message}) => (
  <>
    <p className={s.text}>{message}</p>
  </>
)

export default Notification;
