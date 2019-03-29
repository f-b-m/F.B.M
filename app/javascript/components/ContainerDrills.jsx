import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListDrills from './ListDrills';
import { getAllDrills } from '../actions/drill';

const mapStateToProps = state => ({
  userId: state.auths.userId,
  drills: state.drills,
});

const mapDispatchToProps = dispatch => ({
  getAllDrills: drills => dispatch(getAllDrills(drills)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDrills));
