import React from "react";

const BlogContainer = () => {
  return (
    <div className="blog-content-wrap">
      <div className="blog-entry-header">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <ul className="entry-meta">
              <li>
                <img
                  loading="lazy"
                  src="https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
                  className="avatar user-1-avatar avatar-150 photo"
                  width="150"
                  height="150"
                  alt="Profile Photo"
                />
                By{" "}
                <a href="https://animetrixlabs.com/knowledgecentre/author/wt-gharda/">
                  wt-gharda
                </a>
              </li>
              <li>
                <i className="icofont-calendar"></i> July 15, 2025{" "}
              </li>
              <li>
                <i className="icofont-comment"></i> 0 Comments{" "}
              </li>
              <li>
                <i className="icofont-tag"></i>{" "}
                <a
                  href="https://animetrixlabs.com/knowledgecentre/category/new-post/"
                  rel="category tag"
                >
                  new post
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="2002"
          className="elementor elementor-2002"
        >
          {/* Introduction Section */}
          <section className="elementor-section">
            <div className="elementor-container">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget-wrap">
                  <div className="elementor-widget">
                    <div className="elementor-widget-container">
                      <span className="emoji">🌿</span> Green Living Tips
                    </div>
                  </div>
                  <div className="elementor-widget">
                    <div className="elementor-widget-container">
                      Simple, everyday practices to live more sustainably at
                      home, at work, and on the move.
                    </div>
                  </div>
                  <div className="elementor-widget">
                    <div className="elementor-widget-container">
                      <p>
                        A lifestyle rooted in conscious choices not only
                        supports the planet but also improves well-being, saves
                        resources, and creates a cleaner future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Green at Home Section */}
          <section className="elementor-section">
            <div className="elementor-container">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget-wrap">
                  <h4>
                    <span className="emoji">🏡</span> Green at Home
                  </h4>
                  <h4>
                    <span className="emoji">💡</span> Save Electricity the Smart
                    Way
                  </h4>
                  <ul className="elementor-icon-list-items">
                    <li>
                      <i className="far fa-dot-circle"></i> Switch to LED bulbs
                      and turn off appliances when not in use.
                    </li>
                    <li>
                      <i className="far fa-dot-circle"></i> Keep the home
                      well-ventilated to reduce dependence on air conditioners.
                    </li>
                    <li>
                      <i className="far fa-dot-circle"></i> Use ceiling fans
                      over coolers or ACs whenever possible.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Water-Saving Habits Section */}
          <section className="elementor-section">
            <div className="elementor-container">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget-wrap">
                  <h4>
                    <span className="emoji">🚿</span> Water-Saving Habits
                  </h4>
                  <ul className="elementor-icon-list-items">
                    <li>
                      <i className="far fa-dot-circle"></i> Turn off taps while
                      brushing or washing utensils.
                    </li>
                    <li>
                      <i className="far fa-dot-circle"></i> Use buckets for
                      bathing instead of showers.
                    </li>
                    <li>
                      <i className="far fa-dot-circle"></i> Collect rinse water
                      from washing vegetables for watering plants.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Continue with other sections similarly... */}
          {/* You would add all the other sections following the same pattern */}

          {/* Did You Know Section */}
          <section className="elementor-section">
            <div className="elementor-container">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget-wrap">
                  <h4>
                    <span className="emoji">📚</span> Did You Know?
                  </h4>
                  <ul className="elementor-icon-list-items">
                    <li>
                      <i className="far fa-dot-circle"></i>{" "}
                      <b>One hour of air conditioning</b> uses the same
                      electricity as running a fan for nearly 20 hours.
                    </li>
                    <li>
                      <i className="far fa-dot-circle"></i>{" "}
                      <b>1kg of recycled paper</b> saves about 17 litres of
                      water and 1.5kg of CO₂ emissions.
                    </li>
                    <li>
                      <i className="far fa-dot-circle"></i>{" "}
                      <b>Organic waste composting</b> reduces the load on
                      municipal landfills and improves soil quality.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
