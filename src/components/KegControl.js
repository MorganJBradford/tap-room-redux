import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import * as a from "./../actions/index";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg !== null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editingKeg();
    dispatch(action);
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.mainKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.editingKeg();
    dispatch(action2);
    this.setState({
      selectedKeg: null
    });
  }

  handleSellingKeg = (id) => {
    const selectedKeg = this.props.mainKegList[id];
    if (selectedKeg.pints > 0) {
      selectedKeg.pints -= 1;
    }
    this.setState({selectedKeg: selectedKeg});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editingKeg) {
      currentlyVisibleState = 
      <EditKegForm
        keg={this.state.selectedKeg}
        onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg !== null) {
      currentlyVisibleState = 
      <KegDetail
        keg={this.state.selectedKeg}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick}
        onClickingSell={this.handleSellingKeg} />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

KegControl.propTypes = {
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editingKeg: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editingKeg: state.editingKeg
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;