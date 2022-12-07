
import styles from './index.module.css';
import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../lib/hooks';
import { HOME_NAV_LABELS, ROUTES, WINDOW_TYPE } from '../../lib/constants';
const cx = classNames.bind(styles);

export const HomeLayout = () => {
    const { width, type } = useWindowSize();
    const isMobile = type === WINDOW_TYPE.MOBILE;
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isSmall = width < 600 || isMobile;

    const goTo = (route) => {
        navigate(route);
    }

    console.log(isSmall)
    return <div
        className={cx(styles.page, {
            [styles.mobile]: isMobile
        })}
    >
        <div
        className={cx(styles.navBar, {
            [styles.small]: isSmall
        })}
        >
            <div onClick={() => goTo(ROUTES.HOME)} className={cx(styles.navItem, {
                [styles.selected]: pathname === ROUTES.HOME
            })}>
                <span className={cx(styles.navItemLabel)}>{HOME_NAV_LABELS.HOME}</span>
            </div>  
            <div onClick={() => goTo(ROUTES.PROFILE)} className={cx(styles.navItem, {
                [styles.selected]: pathname === ROUTES.PROFILE
            })}>
                <span className={cx(styles.navItemLabel)}>{HOME_NAV_LABELS.PROFILE}</span>
            </div>  
            <div onClick={() => goTo(ROUTES.RESOURCES)} className={cx(styles.navItem, {
                [styles.selected]: pathname === ROUTES.RESOURCES
            })}>
                <span className={cx(styles.navItemLabel)}>{HOME_NAV_LABELS.RESOURCES}</span>
            </div> 
            <div onClick={() => goTo(ROUTES.FAQ)} className={cx(styles.navItem, {
                [styles.selected]: pathname === ROUTES.FAQ
            })}>
                <span className={cx(styles.navItemLabel)}>{HOME_NAV_LABELS.FAQ}</span>
            </div> 
        </div>
    </div>
}