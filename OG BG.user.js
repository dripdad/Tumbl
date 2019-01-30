// ==UserScript==
// @name			OG BG
// @namespace		http://pisspasta.tumblr.com/
// @version			1.0
// @author			dripdad
// @description		Original bg color
// @icon			https://pbs.twimg.com/profile_images/467963365172576256/_5NLD8Uq_normal.jpeg
// @include			https://www.tumblr.com/blog*
// @include			https://www.tumblr.com/dashboard*
// @include			https://www.tumblr.com/inbox*
// @include			https://www.tumblr.com/tagged*
// @include			https://www.tumblr.com/likes*
// @include			https://www.tumblr.com/reblog*
// @include			https://www.tumblr.com/settings*
// @include			https://www.tumblr.com/search*
// @grant			none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

/* GENERAL BACKGROUND */
addGlobalStyle('.discover_actions_discover.flag--accessibility-design-update .elevator, .search_actions_search.flag--accessibility-design-update .elevator, .flag--accessibility-design-update .l-container.l-container--flex .l-content, .flag--accessibility-design-update .post-forms-glass, body.flag--always-opaque-peepr .ui_peepr_glass, body.flag--always-opaque-peepr.flag--accessibility-design-update .ui_peepr_glass, .flag--accessibility-design-update .l-header-container--refresh, .flag--accessibility-design-update .l-container.l-container--two-column-dashboard .right_column, .flag--accessibility-design-update .l-container.l-container--two-column .right_column, .flag--accessibility-design-update .post_avatar, .flag--accessibility-design-update .l-container.l-container--two-column-dashboard .left_column, .l-container.l-container--two-column-dashboard .left_column, .flag--accessibility-design-update .ui_dialog_lock, .identity, .flag--accessibility-design-update .identity, .identity.flag--accessibility-design-update, .flag--accessibility-design-update .l-container.l-container--two-column-dashboard .l-content, .flag--accessibility-design-update .l-container.l-container--two-column .l-content {background-color: #36465d !important;}');

/* POST PERMALINK CORNER PAGE TURN */
addGlobalStyle('.flag--accessibility-design-update .post_full .post_permalink {border-top-color: #36465d !important;}');
addGlobalStyle('.flag--accessibility-design-update .post_full .post_permalink {border-right-color: #36465d !important;}');

/* GENDERAL TAB COLORS */
addGlobalStyle('.flag--accessibility-design-update .tab-notice--outlined {border-color: #36465d;}');
addGlobalStyle('.flag--accessibility-design-update .tab_notice .tab_notice_value {color: #36465d;}');

/* INBOX TAB COLORS */
addGlobalStyle('#inbox_button .tab_notice, .flag--accessibility-design-update .tab_inbox .tab_notice {background-color: #ff0000 !important;}');
addGlobalStyle('#inbox_button .tab_notice_value, .flag--accessibility-design-update .tab_inbox .tab_notice_value {color: #fff !important;}');
