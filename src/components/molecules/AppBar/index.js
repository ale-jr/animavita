import PropTypes from "prop-types";
import { AppBarBox, AppBarTitle } from "./style";

function AppBar({ title }) {
  return (
    <AppBarBox>
      <AppBarTitle>
        {title}
      </AppBarTitle>
    </AppBarBox>
  );
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default AppBar;
