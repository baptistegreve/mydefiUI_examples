import React, { Component } from "react";
import "../App.css";

/** Import mydefiUI theme */
import { Colors, Text } from "@mydefi/ui";

/** Manage Routing */
import { Link } from "react-router-dom";

class Navigation extends Component {
  /** Initiate component's state */
  state = {
    MenuVis: false
  };

  componentDidMount() {}

  /** Add the active class to menu when clicked (only for mobile) */
  ToggleMenu = () => {
    this.setState({ MenuVis: !this.state.MenuVis });
  };

  /** Function called when user is opening a new page */
  SwitchPage = () => {
    window.scrollTo(0, 0);
    this.ToggleMenu();
  };

  /** Render Navigation */
  render() {
    let MenuClassName = "navigation-container ptop-25";
    if (this.state.MenuVis === true) {
      MenuClassName = "navigation-container active ptop-25";
    }

    return (
      <React.Fragment>
        {/** Display burger (visible only on mobile) */}
        <BurgerButton ToggleMenu={this.ToggleMenu}></BurgerButton>
        <div className={MenuClassName}>
          <div className="col-12 center">
            <Link to="/">
              <Text
                bold
                size="20px"
                className="cursor"
                onClick={this.SwitchPage}
              >
                mydefiUI
              </Text>
            </Link>
          </div>

          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Get Started
            </Text>
            <Link to="/installation">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Installation
              </Text>
            </Link>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Theme
            </Text>
            <Link to="/colors">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Colors
              </Text>
            </Link>

            <Link to="/text">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Text
              </Text>
            </Link>

            <Link to="/button">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Button
              </Text>
            </Link>

            <Link to="/badge">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Badge
              </Text>
            </Link>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Components
            </Text>

            <Link to="/main">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Main
              </Text>
            </Link>

            <Link to="/card">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Card
              </Text>
            </Link>

            <Link to="/asset">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Asset
              </Text>
            </Link>

            <Link to="/table">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Table
              </Text>
            </Link>

            <Link to="/sidepanel">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                SidePanel
              </Text>
            </Link>
            <Link to="/modal">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                Modal
              </Text>
            </Link>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Inputs
            </Text>

            <Link to="/textfield">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                TextField
              </Text>
            </Link>

            <Link to="/checkbox">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
                onClick={this.SwitchPage}
              >
                CheckBox
              </Text>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

/** Additional component to display the burger menu icon */
const BurgerButton = props => {
  return (
    <div className="navigation-burger">
      <img
        alt="burger-menu-icon"
        src={require("../assets/img/burger-menu-icon.png")}
        width="40"
        onClick={props.ToggleMenu}
      />
    </div>
  );
};

export default Navigation;
