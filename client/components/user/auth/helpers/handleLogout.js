import EE from '../../../../setup/events';
import { LOGOUT } from '../../../../constants/actions';

export default function handleClick(e, clickCallback) {
  e.preventDefault();
  EE.emit(LOGOUT, clickCallback);
}
