import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '@/components/Image/Image';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const AccountItem = forwardRef(({ data, isSuggest }, ref) => {
  return (
    <Link ref={ref} to={`/profile/@${data.nickname}`} className={cx('wrapper', { 'margin-left': isSuggest })}>
      <Image className={cx('avatar', { 'avatar-small': isSuggest })} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{isSuggest ? data.nickname : data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username', { 'username-small': isSuggest })}>
          {isSuggest ? data.first_name + ' ' + data.last_name : data.nickname}
        </span>
      </div>
    </Link>
  );
});

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
