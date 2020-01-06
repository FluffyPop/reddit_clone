import { connect } from 'react-redux';

import { RegisterModal } from './RegisterModal';
import { toggleRegister } from '../../ducks/modals';
import { register } from '../../ducks/user';

const mapStateToProps = state => ({
  show: state.modals.register
});

const mapDispatchToProps = { toggleRegister, register };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
