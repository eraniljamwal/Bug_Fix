import React from "react";
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";

class PageList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPages('http://localhost/forcefield/wp-json/wp/v2/pages/187'));
  }

  render() {
    
    const { error, loading, pages } = this.props;
    console.log(this.props);
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        Hi {pages.id} {pages.date}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages,
  loading: state.pages.loading,
  error: state.pages.error
});

export default connect(mapStateToProps)(PageList);
