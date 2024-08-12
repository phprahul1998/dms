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
                <div className="search-query selet-caption"><a href="#"><i className="lar la-file-alt iq-arrow-left la-lg pr-2"></i>All Files</a></div><span className="search-replace"></span>
                <span className="caret"></span>
                </div>
            </div>
            <nav className="iq-sidebar-menu">
                <ul id="iq-sidebar-toggle" className="iq-menu">
                <li className=" ">
                            <a href="../backend/page-folders.html" className="">
                                <i className="las la-stopwatch iq-arrow-left"></i><span>Recent</span>
                            </a>
                        <ul id="page-folders" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        </ul>
                     </li>
                     
                     <li className=" ">
                            <a href="../backend/page-favourite.html" className="">
                            <i class="las la-signature"></i><span>Sign</span>
                            </a>
                        <ul id="page-fevourite" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                        </ul>
                     </li>
                     <li className=" ">
                            <a href="../backend/page-favourite.html" className="">
                            <i class="las la-th"></i><span>App</span>
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
                     <li class=" ">
                          <a href="#otherpage" class="collapsed" data-toggle="collapse" aria-expanded="false">
                              <i class="lab la-wpforms iq-arrow-left"></i><span>My Collection</span>
                              <i class="las la-angle-right iq-arrow-right arrow-active"></i>
                              <i class="las la-angle-down iq-arrow-right arrow-hover"></i>
                          </a>
                          <ul id="otherpage" class="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                  <li class=" ">
                                      <a href="#user" class="collapsed" data-toggle="collapse" aria-expanded="false">
                                          <i class="las la-user-cog"></i><span>Favourites</span>
                                          <i class="las la-angle-right iq-arrow-right arrow-active"></i>
                                          <i class="las la-angle-down iq-arrow-right arrow-hover"></i>
                                      </a>
                                      <ul id="user" class="iq-submenu collapse" data-parent="#otherpage">
                                              <li class=" ">
                                                  <a href="../app/user-profile.html">
                                                      <i class="las la-id-card"></i><span>favourite 1</span>
                                                  </a>
                                              </li>
                                              <li class=" ">
                                                  <a href="../app/user-add.html">
                                                      <i class="las la-user-plus"></i><span>favourite 2</span>
                                                  </a>
                                              </li>
                                              <li class=" ">
                                                  <a href="../app/user-list.html">
                                                      <i class="las la-list-alt"></i><span>favourite 3</span>
                                                  </a>
                                              </li>
                                      </ul>
                                  </li>
                               
                                 
                          </ul>
                       </li>
                     
                </ul>
            </nav>
            <div className="sidebar-bottom">
                <h4 className="mb-3"><i className="las la-cloud mr-2"></i>Storage</h4>
                
                <p>37.4 MB of 10.0 GB used</p>
                <div className="iq-progress-bar mb-3">
                    <span className="bg-primary iq-progress progress-1" data-percent="67">
                    </span>
                </div>
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
