import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from '../../components/Cards/Cards';

class Done extends Component {
  state = {
    doneList: [],
  };

  componentDidMount = () => {
    this.setState({ doneList: this.props.doneList });
  };

  render = () => {
    return (
      <div>
        <h2>Done page</h2>
        <Cards cardList={this.props.doneList} />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    doneList: state.doneList,
  };
};

export default connect(mapStateToProps)(Done);
