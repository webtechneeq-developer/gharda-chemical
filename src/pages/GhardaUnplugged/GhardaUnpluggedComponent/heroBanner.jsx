import React from "react";
import "../../knowledgeCenter/knowledgeCenterComponents/knowledgeCenterComponent.css";
import megaphone from "../../../assets/megaphone-alt.svg"; // Importing the SVG icon

// HeroBanner component for the Knowledge Center

function HeroBanner() {
  return (
    <div className="container">
      <div className="newsfeed-banner">
        <div className="media">
          <div className="item-icon">
            <img
              className="icofont-megaphone-alt"
              style={{ color: "#fff" }}
              src={megaphone}
            ></img>
          </div>
          <div className="media-body">
            <h3 className="item-title">Employees Newsfeed</h3>
            <p>
              Check what your Collegues at Gharda Chemicals have been up to!
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="filter-tab">
          <div class="quick-filters item-list-tabs block-box user-timeline-header">
            <ul class="quick-filters-tabs menu-list d-md-block">
              <li class="">
                <a>General </a>
              </li>
              <li class="">
                <a>Awards & Certification</a>
              </li>
              <li class="">
                <a>HR Updates</a>
              </li>
              <li class="">
                <a>Products </a>
              </li>
              <li class="">
                <a>Informal Announcements related to lifestyle </a>
              </li>
              <li class="">
                <a>GARC Updates</a>
              </li>
              <li class="">
                <a>New school </a>
              </li>
              <li class="">
                <a>Admissions etc </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div class="activity-item type-activity_update" id="activity-694">
        <div class="block-box post-view">
          <div class="tag-stickers"></div>
          <div class="post-header">
            <div class="media">
              <div class="activity-avatar">
                <div class="user-img">
                  <a
                    class="user-avatar small no-outline "
                    href="https://animetrixlabs.com/knowledgecentre/members/wt-gharda/"
                  >
                    <img
                      alt=""
                      class="avatar user-2-avatar photo"
                      src="https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
                    />
                  </a>
                </div>
                <div class="status-info">
                  <div class="activity-title">
                    <a href="https://animetrixlabs.com/knowledgecentre/members/wt-gharda/">
                      wt-gharda
                    </a>
                    <span> posted an update</span>
                  </div>
                  <div class="activity-time">21 hours ago</div>
                </div>
              </div>
            </div>
          </div>
          <div class="post-body">
            <div class="activity-inner">
              <p class="widget-box-status-text">hello</p>
            </div>
            <div class="post-meta-wrap">
              <div class="post-meta activity-reaction post-reaction">
                No React!
              </div>
              <div class="post-meta activity-meta">
                <div class="meta-text">
                  <span>0</span> Comments
                </div>
              </div>
            </div>
          </div>
          <div class="post-footer"></div>
          <div class="post-comment">
            <div class="activity-comments"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HeroBanner;
