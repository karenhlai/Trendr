import React from 'react';
import ReactDOM from 'react-dom';
import CreateTextForm from './create_post_forms/create_text_form';
import CreateQuoteForm from './create_post_forms/create_quote_form';
import CreateLinkForm from './create_post_forms/create_link_form';


class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // handle submit in the modals
    this.setType = this.setType.bind(this);
    
  }

  // update(field)
  setType(postType) {
    return (e) => {
      this.setState({ type: postType });
    }
  }

  render () {
    
    return (
      <div>
        <div>
          {/* avatar container for currentUser */}
          <CreateTextForm />
          <CreateQuoteForm />
          <CreateLinkForm />

        </div>
      </div>

    )
  }

}
export default PostForm;