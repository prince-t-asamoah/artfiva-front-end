import { useHistory } from 'react-router-dom';

function ToHistory(url) {
    const appHistory = useHistory();
    return appHistory.push(url);
}
export default ToHistory;