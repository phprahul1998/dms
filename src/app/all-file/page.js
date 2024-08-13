import Link from 'next/link'
import Sidebar from "../component/sidebar";
import Footer from "../component/footer";
const allfiles =()=>{
return(
<div>
<Sidebar/>
<div className="content-page">
<div className="container-fluid">
<div className="row">
<div className="col-sm-12 col-lg-12 col-md-12 col-xl-12">
<div className="d-flex justify-content-between mb-2">
<div className="header-title">
<h4 className="card-title">All Files</h4>
</div>
<div className="header-title">
<button type="button" className="btn btn-outline-secondary text-bold">New <i className="las la-plus"></i></button>
</div>
</div>
<table className="table">
<thead>
<tr>
<th>Name</th>
<th>Updated</th>
<th>Size</th>
</tr>
</thead>
<tbody>
<tr>
<td><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg>My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
<tr>
<td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg> My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
<tr>
<td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg> My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
<tr>
<td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg> My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
<tr>
<td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg> My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
<tr>
<td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg> My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
<tr>
<td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg> My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
<tr>
<td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path><path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
</svg> My file</td>
<td> Aug 9, 2024 by RAHUL KUMAR</td>
<td><span>1 File</span></td>
</tr>
</tbody>
</table>

</div>
</div>
</div>
</div>
<Footer/>
</div>
);
}
export default allfiles