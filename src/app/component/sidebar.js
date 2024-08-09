const Sidebar = () => {    
    return (
        <div>
            <div className="iq-sidebar  sidebar-default ">
        <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
            <a href="index.html" className="header-logo">
                <img src="/logo.png" className="img-fluid rounded-normal light-logo" alt="logo"/>
                {/* <img src="/logo-white.png" className="img-fluid rounded-normal darkmode-logo" alt="logo"/> */}
            </a>
            <div className="iq-menu-bt-sidebar">
                <i className="las la-bars wrapper-menu"></i>
            </div>
        </div>
        <div className="data-scrollbar" data-scroll="1">
            <div className="new-create select-dropdown input-prepend input-append">
                <div className="btn-group">
                    <div data-toggle="dropdown">
                    <div className="search-query selet-caption"><i className="las la-plus pr-2"></i>Create New</div><span className="search-replace"></span>
                    <span className="caret"></span>
                    </div>
                    <ul className="dropdown-menu">
                        <li><div className="item"><i className="ri-folder-add-line pr-3"></i>New Folder</div></li>
                        <li><div className="item"><i className="ri-file-upload-line pr-3"></i>Upload Files</div></li>
                        <li><div className="item"><i className="ri-folder-upload-line pr-3"></i>Upload Folders</div></li>
                    </ul>
                </div>
            </div>
            <nav className="iq-sidebar-menu">
                <ul id="iq-sidebar-toggle" className="iq-menu">
                     <li className=" ">
                            <a href="../backend/index.html" className="">
                                <i className="las la-home iq-arrow-left"></i><span>Dashboard</span>
                            </a>
                        <ul id="dashboard" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        </ul>
                     </li>
                     <li className=" ">
                        <a href="#mydrive" className="collapsed" data-toggle="collapse" aria-expanded="false">
                            <i className="las la-hdd"></i><span>My Drive</span>
                            <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                            <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                        </a>
                        <ul id="mydrive" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li className=" ">
                                        <a href="../backend/page-alexa.html">
                                            <i className="lab la-blogger-b"></i><span>Alexa Workshop</span>
                                        </a>
                                </li>
                                <li className=" ">
                                        <a href="../backend/page-android.html">
                                            <i className="las la-share-alt"></i><span>Android</span>
                                        </a>
                                </li>
                                <li className=" ">
                                        <a href="../backend/page-brightspot.html">
                                            <i className="las la-icons"></i><span>Brightspot</span>
                                        </a>
                                </li>
                                <li className=" ">
                                        <a href="../backend/page-ionic.html">
                                            <i className="las la-icons"></i><span>Ionic Chat App</span>
                                        </a>
                                </li>
                        </ul>
                     </li>
                     <li className=" ">
                            <a href="../backend/page-files.html" className="">
                                <i className="lar la-file-alt iq-arrow-left"></i><span>Files</span>
                            </a>
                        <ul id="page-files" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        </ul>
                     </li>
                     <li className=" ">
                            <a href="../backend/page-folders.html" className="">
                                <i className="las la-stopwatch iq-arrow-left"></i><span>Recent</span>
                            </a>
                        <ul id="page-folders" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        </ul>
                     </li>
                     <li className=" ">
                            <a href="../backend/page-favourite.html" className="">
                                <i className="lar la-star"></i><span>Favourite</span>
                            </a>
                        <ul id="page-fevourite" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        </ul>
                     </li>
                     <li className=" ">
                            <a href="../backend/page-delete.html" className="">
                                <i className="las la-trash-alt iq-arrow-left"></i><span>Trash</span>
                            </a>
                        <ul id="page-delete" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        </ul>
                     </li>
                     <li className=" ">
                        <a href="#otherpage" className="collapsed" data-toggle="collapse" aria-expanded="false">
                            <i className="lab la-wpforms iq-arrow-left"></i><span>other page</span>
                            <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                            <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                        </a>
                        <ul id="otherpage" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li className=" ">
                                    <a href="#user" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i className="las la-user-cog"></i><span>User Details</span>
                                        <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                    </a>
                                    <ul id="user" className="iq-submenu collapse" data-parent="#otherpage">
                                            <li className=" ">
                                                <a href="../app/user-profile.html">
                                                    <i className="las la-id-card"></i><span>User Profile</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../app/user-add.html">
                                                    <i className="las la-user-plus"></i><span>User Add</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../app/user-list.html">
                                                    <i className="las la-list-alt"></i><span>User List</span>
                                                </a>
                                            </li>
                                    </ul>
                                </li>
                                <li className=" ">
                                    <a href="#ui" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i className="lab la-uikit iq-arrow-left"></i><span>UI Elements</span>
                                        <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                    </a>
                                    <ul id="ui" className="iq-submenu collapse" data-parent="#otherpage">
                                            <li className=" ">
                                                <a href="../backend/ui-avatars.html">
                                                    <i className="las la-user-tie"></i><span>Avatars</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-alerts.html">
                                                    <i className="las la-exclamation-triangle"></i><span>Alerts</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-badges.html">
                                                    <i className="las la-id-badge"></i><span>Badges</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-breadcrumb.html">
                                                    <i className="las la-ellipsis-h"></i><span>Breadcrumb</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-buttons.html">
                                                    <i className="las la-ticket-alt"></i><span>Buttons</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-buttons-group.html">
                                                    <i className="las la-object-group"></i><span>Buttons Group</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-boxshadow.html">
                                                    <i className="las la-boxes"></i><span>Box Shadow</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-colors.html">
                                                    <i className="las la-brush"></i><span>Colors</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-cards.html">
                                                    <i className="las la-credit-card"></i><span>Cards</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-carousel.html">
                                                    <i className="las la-sliders-h"></i><span>Carousel</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-grid.html">
                                                    <i className="las la-th-large"></i><span>Grid</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-helper-classNamees.html">
                                                    <i className="las la-hands-helping"></i><span>Helper classNamees</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-images.html">
                                                    <i className="las la-image"></i><span>Images</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-list-group.html">
                                                    <i className="las la-list-alt"></i><span>list Group</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-media-object.html">
                                                    <i className="las la-photo-video"></i><span>Media</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-modal.html">
                                                    <i className="las la-columns"></i><span>Modal</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-notifications.html">
                                                    <i className="las la-bell"></i><span>Notifications</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-pagination.html">
                                                    <i className="las la-ellipsis-h"></i><span>Pagination</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-popovers.html">
                                                    <i className="las la-spinner"></i><span>Popovers</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-progressbars.html">
                                                    <i className="las la-heading"></i><span>Progressbars</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-typography.html">
                                                    <i className="las la-tablet"></i><span>Typography</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-tabs.html">
                                                    <i className="las la-tablet"></i><span>Tabs</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-tooltips.html">
                                                    <i className="las la-magnet"></i><span>Tooltips</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/ui-embed-video.html">
                                                    <i className="las la-play-circle"></i><span>Video</span>
                                                </a>
                                            </li>
                                    </ul>
                                </li>
                                <li className=" ">
                                    <a href="#auth" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i className="las la-torah iq-arrow-left"></i><span>Authentication</span>
                                        <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                    </a>
                                    <ul id="auth" className="iq-submenu collapse" data-parent="#otherpage">
                                            <li className=" ">
                                                <a href="../backend/auth-sign-in.html">
                                                    <i className="las la-sign-in-alt"></i><span>Login</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/auth-sign-up.html">
                                                    <i className="las la-registered"></i><span>Register</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/auth-recoverpw.html">
                                                    <i className="las la-unlock-alt"></i><span>Recover Password</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/auth-confirm-mail.html">
                                                    <i className="las la-envelope-square"></i><span>Confirm Mail</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/auth-lock-screen.html">
                                                    <i className="las la-lock"></i><span>Lock Screen</span>
                                                </a>
                                            </li>
                                    </ul>
                                </li>
                                <li className=" ">
                                    <a href="#pricing" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i className="las la-coins"></i><span>Pricing</span>
                                        <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                    </a>
                                    <ul id="pricing" className="iq-submenu collapse" data-parent="#otherpage">
                                            <li className=" ">
                                                <a href="../backend/pricing.html">
                                                    <i className="las la-weight"></i><span>Pricing 1</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/pricing-2.html">
                                                    <i className="las la-dna"></i><span>Pricing 2</span>
                                                </a>
                                            </li>
                                    </ul>
                                </li>
                                <li className=" ">
                                    <a href="#pages-error" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                        <i className="las la-exclamation-triangle"></i><span>Error</span>
                                        <i className="las la-angle-right iq-arrow-right arrow-active"></i>
                                        <i className="las la-angle-down iq-arrow-right arrow-hover"></i>
                                    </a>
                                    <ul id="pages-error" className="iq-submenu collapse" data-parent="#otherpage">
                                            <li className=" ">
                                                <a href="../backend/pages-error.html">
                                                    <i className="las la-bomb"></i><span>Error 404</span>
                                                </a>
                                            </li>
                                            <li className=" ">
                                                <a href="../backend/pages-error-500.html">
                                                    <i className="las la-exclamation-circle"></i><span>Error 500</span>
                                                </a>
                                            </li>
                                    </ul>
                                </li>
                                <li className="active">
                                        <a href="../backend/pages-blank-page.html">
                                            <i className="las la-pager"></i><span>Blank Page</span>
                                        </a>
                                </li>
                                <li className=" ">
                                        <a href="../backend/pages-maintenance.html">
                                            <i className="las la-cubes"></i><span>Maintenance</span>
                                        </a>
                                </li>
                        </ul>
                     </li>
                </ul>
            </nav>
            <div className="sidebar-bottom">
                <h4 className="mb-3"><i className="las la-cloud mr-2"></i>Storage</h4>
                <p>17.1 / 20 GB Used</p>
                <div className="iq-progress-bar mb-3">
                    <span className="bg-primary iq-progress progress-1" data-percent="67">
                    </span>
                </div>
                <p>75% Full - 3.9 GB Free</p>
                <a href="#" className="btn btn-outline-primary view-more mt-4">Buy Storage</a>
            </div>
            <div className="p-3"></div>
        </div>
        </div>       <div className="iq-top-navbar">
        <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                <i className="ri-menu-line wrapper-menu"></i>
                <a href="index.html" className="header-logo">
                    <img src="/logo.png" className="img-fluid rounded-normal light-logo" alt="logo"/>
                    {/* <img src="/logo-white.png" className="img-fluid rounded-normal darkmode-logo" alt="logo"/> */}
                </a>
            </div>
                <div className="iq-search-bar device-search">
                    
                    <form>
                        <div className="input-prepend input-append">
                            <div className="btn-group">
                                <label className="dropdown-toggle searchbox" data-toggle="dropdown">
                                <input className="dropdown-toggle search-query text search-input" type="text"  placeholder="Type here to search..."/><span className="search-replace"></span>
                                <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                <span className="caret"></span>
                                </label>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><div className="item"><i className="far fa-file-pdf bg-info"></i>PDFs</div></a></li>
                                    <li><a href="#"><div className="item"><i className="far fa-file-alt bg-primary"></i>Documents</div></a></li>
                                    <li><a href="#"><div className="item"><i className="far fa-file-excel bg-success"></i>Spreadsheet</div></a></li>
                                    <li><a href="#"><div className="item"><i className="far fa-file-powerpoint bg-danger"></i>Presentation</div></a></li>
                                    <li><a href="#"><div className="item"><i className="far fa-file-image bg-warning"></i>Photos & Images</div></a></li>
                                    <li><a href="#"><div className="item"><i className="far fa-file-video bg-info"></i>Videos</div></a></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
    
                <div className="d-flex align-items-center">
                    <div className="change-mode">
                        <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                            <div className="custom-switch-inner">
                                <p className="mb-0"> </p>
                                <input type="checkbox" className="custom-control-input" id="dark-mode" data-active="true"/>
                                <label className="custom-control-label" data-mode="toggle">
                                    <span className="switch-icon-left"><i className="a-left"></i></span>
                                    <span className="switch-icon-right"><i className="a-right"></i></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                    <i className="ri-menu-3-line"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-list align-items-center">
                        <li className="nav-item nav-icon search-content">
                            <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-search-line"></i>
                            </a>
                            <div className="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                                <form action="#" className="searchbox p-2">
                                    <div className="form-group mb-0 position-relative">
                                    <input type="text" className="text search-input font-size-12" placeholder="type here to search..."/>
                                    <a href="#" className="search-link"><i className="las la-search"></i></a> 
                                    </div>
                                </form>
                            </div>
                        </li> 
                        <li className="nav-item nav-icon dropdown">
                            <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-question-line"></i>
                            </a>
                            <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton01">
                                <div className="card shadow-none m-0">
                                    <div className="card-body p-0 ">
                                        <div className="p-3">
                                            <a href="#" className="iq-sub-card pt-0"><i className="ri-questionnaire-line"></i>Help</a>
                                            <a href="#" className="iq-sub-card"><i className="ri-recycle-line"></i>Training</a>
                                            <a href="#" className="iq-sub-card"><i className="ri-refresh-line"></i>Updates</a>
                                            <a href="#" className="iq-sub-card"><i className="ri-service-line"></i>Terms and Policy</a>
                                            <a href="#" className="iq-sub-card"><i className="ri-feedback-line"></i>Send Feedback</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-icon dropdown"> 
                            <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <i className="ri-settings-3-line"></i>
                            </a>
                            <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton02">
                                <div className="card shadow-none m-0">
                                    <div className="card-body p-0 ">
                                        <div className="p-3">
                                            <a href="#" className="iq-sub-card pt-0"><i className="ri-settings-3-line"></i> Settings</a>
                                            <a href="#" className="iq-sub-card"><i className="ri-hard-drive-line"></i> Get Drive for desktop</a>
                                            <a href="#" className="iq-sub-card"><i className="ri-keyboard-line"></i> Keyboard Shortcuts</a>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-icon dropdown caption-content">
                            <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                <div className="caption bg-primary line-height">P</div>
                            </a>
                            <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton03">
                                <div className="card mb-0">
                                    <div className="card-header d-flex justify-content-between align-items-center mb-0">
                                    <div className="header-title">
                                        <h4 className="card-title mb-0">Profile</h4>
                                    </div>
                                    <div className="close-data text-right badge badge-primary cursor-pointer "><i className="ri-close-fill"></i></div>
                                    </div>
                                    <div className="card-body">
                                        <div className="profile-header">
                                            <div className="cover-container text-center">
                                                <div className="rounded-circle profile-icon bg-primary mx-auto d-block">
                                                    P                                                    
                                                    <a href="">
                                                        
                                                    </a>
                                                </div>
                                                <div className="profile-detail mt-3">
                                                <h5><a href="../app/user-profile-edit.html">Panny Marco</a></h5>
                                                <p>pannymarco@gmail.com</p>
                                                </div>
                                                <a href="auth-sign-in.html" className="btn btn-primary">Sign Out</a>
                                            </div>
                                            <div className="profile-details mt-4 pt-4 border-top">
                                                <div className="media align-items-center mb-3">
                                                    <div className="rounded-circle iq-card-icon-small bg-primary">
                                                        A
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <div className="media justify-content-between">
                                                            <h6 className="mb-0">Anna Mull</h6>
                                                            <p className="mb-0 font-size-12"><i>Signed Out</i></p>
                                                        </div>
                                                        <p className="mb-0 font-size-12">annamull@gmail.com</p>
                                                    </div>                                                 
                                                </div>
                                                <div className="media align-items-center mb-3">
                                                    <div className="rounded-circle iq-card-icon-small bg-success">
                                                        K
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <div className="media justify-content-between">
                                                            <h6 className="mb-0">King Poilin</h6>
                                                            <p className="mb-0 font-size-12"><i>Signed Out</i></p>
                                                        </div>
                                                        <p className="mb-0 font-size-12">kingpoilin@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="media align-items-center">
                                                    <div className="rounded-circle iq-card-icon-small bg-danger">
                                                        D
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <div className="media justify-content-between">
                                                            <h6 className="mb-0">Devid Worner</h6>
                                                            <p className="mb-0 font-size-12"><i>Signed Out</i></p>
                                                        </div>
                                                        <p className="mb-0 font-size-12">devidworner@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        </ul>                     
                    </div> 
                </div>
            </nav>
        </div>
    </div>  
        </div>
    );
};

export default Sidebar;
