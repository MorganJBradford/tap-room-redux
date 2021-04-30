import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import * as a from "./../actions/index";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg.id !== undefined) {
      const action = a.selectKeg();
      dispatch(action);
    } else {
      const action2 = a.toggleForm();
      dispatch(action2);
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
    const { dispatch } = this.props;
    const selectedKeg = this.props.mainKegList[id];
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
    console.log(this.props.selectedKeg.id);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.selectKeg();
    dispatch(action2);
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    const action2 = a.editingKeg();
    dispatch(action2);
    const action3 = a.selectKeg();
    dispatch(action3);
  }

  handleSellingKeg = (id) => {
    const selectedKeg = this.props.selectKeg;
    if (selectedKeg.pints > 0) {
      selectedKeg.pints -= 1;
    }
    const { dispatch } = this.props;
    const action2 = a.selectKeg();
    dispatch(action2);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editingKeg) {
      currentlyVisibleState = 
      <EditKegForm
        keg={this.props.selectedKeg}
        onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg.id !== undefined) {
      console.log(this.props.selectedKeg);
      currentlyVisibleState = 
      <KegDetail
        keg={this.props.selectedKeg}
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
  editingKeg: PropTypes.bool,
  selectKeg: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editingKeg: state.editingKeg,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;