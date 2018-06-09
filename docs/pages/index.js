import Redirect from '../components/redirect';
import {prefixUrl} from '@mapabc/batfish/modules/prefix-url';
export default Redirect(() => prefixUrl(`/api/${window.location.hash}`));
