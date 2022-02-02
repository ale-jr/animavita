import PropTypes from "prop-types";
import AppBar from "../../molecules/AppBar";
import { PageBox } from "./style";

function PageWithAppBar({ title, children }) {
  return (
    <PageBox>
      <AppBar title={title} />
      <main>
        {children}
      </main>
    </PageBox>
  );
}

PageWithAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default PageWithAppBar;
