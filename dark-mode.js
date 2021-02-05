var styles = `
li.divider-vertical.hidden-xs {
    border-right: 0px solid #000
}

li {
    color: #cdced0;
}

#welnet_interior_right_title_header {
    border-bottom: 0px solid #000;
}

.navbar {
    border-bottom-width: 0px;
    border-right: 0px solid #000;
    background-color: #303133;
}

#welnet-interior {
    background: #1d1d1f;
}

#welnet_interior_right_bottom {
    color: #cdced0;
}

.dropdown-menu {
    background-color: #303133;
}

#welnet_interior_right_title_header {
    background-color: #00702a;
}

#welnet-footer {
    background-color: #303133;
}

body {
    background-color: #303133;
}

.blue-fade-background {
    background: rgba(0, 0, 0, 0);
}

.welnet-tile-bottom {
    background-color: #303133;
}

.welnet-tile-container {
    border: 0px;
    border-radius: 15px;
}

.secondary_title {
    margin-left: 5px;
}

div.welnet-tile-bottom p {
    margin-left: 5px;
}

.main_title {
    color: #cdced0;
}

.welnet_interior_right_crumbs a {
    color: #fff;
}

form#studentProfileForm {
    color: #000;
}

.blue-bar-tile-title, .student-tile-header {
    color: #fff;
}

div.col-xs-12.col-sm-6.col-md-6.col-lg-6 {
    color: #000;
}

.ui-widget-content {
    background: #303133;
    color: #fff;
}
`

var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)