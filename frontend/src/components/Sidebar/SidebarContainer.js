import { connect } from 'react-redux';

import { Sidebar } from './Sidebar';

const mapStateToProps = state => ({
  show: state.modals.sidebar
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
