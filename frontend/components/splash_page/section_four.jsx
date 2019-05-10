import React from "react";

class SectionFour extends React.Component {
  render() {
    return (
      <div className="section section-four">
        <div className="nav-col pictures">
          <div className="nav-row">
            <div className="nav-avatar">
              <img
                src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
                className="first-avatar"
              />
              <div className="nav-section">
                <div className="icon-clear-fix">
                  <div className="icon-label">
                    <i className="fas fa-font" />
                    <span>Text</span>
                  </div>
                  <div className="icon-label">
                    <i className="fas fa-camera" />
                    <span>Photo</span>
                  </div>
                  <div className="icon-label">
                    <i className="fas fa-quote-right" />
                    <span>Quote</span>
                  </div>
                  <div className="icon-label">
                    <i className="fas fa-link" />
                    <span>Link</span>
                  </div>
                  <div className="icon-label">
                    <i className="fas fa-comment-alt" />
                    <span>Chat</span>
                  </div>
                  <div className="icon-label">
                    <i className="fas fa-headphones-alt" />
                    <span>Audio</span>
                  </div>
                  <div className="icon-label">
                    <i className="fas fa-video" />
                    <span>Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-row">
            <div className="nav-avatar">
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
                className="big-avatar"
              />
              <div className="nav-post">
                <div className="nav-top">

                  <h4>ash_k3tchup</h4>

                </div>
                <img
                  src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg"
                  className="nav-image"
                />
                <div className="nav-bottom">
                  <div className="nav-notes">2.130 not</div>
                  <div className="nav_controls">
                    <div className="post_controls_inner">
                      <i className="fas fa-share-alt" />
                      <i className="fas fa-retweet" />
                      <i className="far fa-heart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-row">
            <div className="nav-avatar">
              <img
                src="https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg"
                className="big-avatar"
              />
              <div className="nav-post">
                <div className="nav-top">

                  <h4>pup_p3r</h4>

                </div>
                <img
                  src="https://66.media.tumblr.com/0d3b8eefc3bcd0fbe589da5a2808a5a6/tumblr_pkyd96Euc01tsakdz_1280.jpg"
                  className="nav-image"
                />
                <div className="nav-bottom">
                  <div className="nav-notes">2.130 not</div>
                  <div className="nav_controls">
                    <div className="post_controls_inner">
                      <i className="fas fa-share-alt" />
                      <i className="fas fa-retweet" />
                      <i className="far fa-heart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-col">
          <h1 className="session-four-header">
            You already <br/> know how this <br/> works.
          </h1>
          <h3 className="session-four-paragraph">
            Once you follow a blog, all of its posts show up in <br/>
            your dashboard, just like you’d expect. See <br/>
            something great? Reblog it to your own blog. Add <br/>
            commentary if you like. Make it your own. Other <br/>
            people will do the same to your posts. That’s how <br/>
            you meet people here.
          </h3>
        </div>
      </div>
    );
  }
}

export default SectionFour;