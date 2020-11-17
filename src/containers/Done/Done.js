import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from '../../components/Cards/Cards';

class Done extends Component {
  state = {
    deleteList: [],
  };

  componentDidMount = () => {
    this.setState({ deleteList: this.props.deleteList });
  };

  render = () => {
    return (
      <div>
        <h2>Done page</h2>
        <Cards cardList={this.props.deleteList} />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    deleteList: state.deleteList,
  };
};

export default connect(mapStateToProps)(Done);
