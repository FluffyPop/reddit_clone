import { connect } from 'react-redux';

import { Sidebar } from './Sidebar';
import { fetchSubreddits } from '../../ducks/subreddits';

const mapStateToProps = state => ({
  show: state.modals.sidebar,
  subreddits: state.subreddits.items
});

const mapDispatchToProps = { fetchSubreddits };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
