import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FormSearch from "../formsearch";
import Breadcrumb from "../breadcrumb";
import PropTypes from 'prop-types'; // Import PropTypes

function JobSec1(props) {
   const { data: currentItems, count, searchKey, locationKey, loading } = props;




   
   const location = useLocation();
   const currentPage =
      +new URLSearchParams(location.search).get("pageNumber") || 1;

   const itemsPerPage = 9;
   const totalPages = Math.ceil(count / itemsPerPage);

   const paginationLinks = [];
   for (let i = 1; i <= totalPages; i++) {
      paginationLinks.push(
         <li key={i} className={i === currentPage ? "current" : ""}>
            <Link to={`/search?${searchKey}${locationKey}&pageNumber=${i}`}>
               {i}
            </Link>
         </li>
      );
   }

   return (
      <section className="inner-jobs-section">
         <Breadcrumb title="Search " className="breadcrumb-section" />
         <FormSearch />

         <div className="tf-container">
            <div className="row">
               <Tabs className="col-lg-12 tf-tab">
                  <div className="wd-meta-select-job">
                     <div className="wd-findjob-filer">
                        <div className="group-select-display">
                           <TabList className="inner menu-tab">
                              <Tab className="btn-display active">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                 >
                                    <path
                                       d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z"
                                       fill="#A0A0A0"
                                    />
                                    <path
                                       d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z"
                                       fill="#A0A0A0"
                                    />
                                    <path
                                       d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z"
                                       fill="#A0A0A0"
                                    />
                                 </svg>
                              </Tab>
                              <Tab className="btn-display">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                 >
                                    <path
                                       d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z"
                                       fill="white"
                                    />
                                 </svg>
                              </Tab>
                           </TabList>
                           {/* <p className="nofi-job">
                              <span>234</span> Help Line Numbers
                           </p> */}
                        </div>
                        {/* <SortBuy /> */}
                     </div>
                  </div>
                  <div className="content-tab">
                     <TabPanel className="inner">
                        {!loading && currentItems.length === 0 && (
                           <p className="text-black font-xl">No data found.</p>
                        )}
                        {loading && (
                           <p className="text-black font-xl">Loading...</p>
                        )}
                        {currentItems?.map((idx) => (
                           <div key={idx.id} className="features-job style-3">
                              <div className="inner-box">
                                 <div className="company">
                                    <div className="box-content">
                                       <h4>
                                          <Link to="#">{idx.agen}</Link>
                                       </h4>
                                      <p className="uid">{idx.uid}</p>
                                       <h3>
                                          {idx.issue}
                                       </h3>
                                       <p>{idx.des}</p>
                                    </div>
                                 </div>
                                 <ul className="info">
                                    <li>
                                       <span className="icon-map-pin"></span>
                                       {idx.location}
                                    </li>
                                    <div>
                                       <h4 className="lang">Location</h4>
                                       <li>{idx.map}</li>
                                       <h4 className="lang1">Support Type</h4>
                                       <li>{idx.sup}</li>
                                    </div>
                                 </ul>
                                 <ul className="info_one">
                                    <li>{idx.location}</li>
                                    <div>
                                       <h4 className="lang">Language</h4>
                                       <li>{idx.lan}</li>
                                    </div>
                                 </ul>

                                 <div className="category">
                                    <ul className="job-tag">
                                       <li>
                                          <Link to="#">{idx.stt}</Link>
                                       </li>
                                    </ul>
                                 </div>

                                 <div className="salary">
                                    <p>{idx.price}</p>
                                    <br />
                                    <p>{idx.num}</p>
                                    <br />
                                    <p>{idx.num1}</p>
                                 </div>
                                 <div className="group-btn">
                                    <button>Call Now</button>
                                 </div>
                              </div>
                           </div>
                        ))}

                        <ul className="pagination-job padding">
                           {/* Previous Page */}
                           <li>
                              {currentPage > 1 && (
                                 <Link to={`/page/${currentPage - 1}`}>
                                    <i className="icon-keyboard_arrow_left"></i>
                                 </Link>
                              )}
                           </li>

                           {paginationLinks}

                           {/* Next Page */}
                           <li>
                              {currentPage < totalPages && (
                                 <Link to={`/page/${currentPage + 1}`}>
                                    <i className="icon-keyboard_arrow_right"></i>
                                 </Link>
                              )}
                           </li>
                        </ul>
                     </TabPanel>
                     <TabPanel className="inner">
                        <div className="group-col-3">
                        {currentItems?.map((idx) => (
                              <div key={idx.id} className="features-job cl3">
                                 <div className="job-archive-header">
                                    <div className="inner-box">
                                       <div className="box-content">
                                          <h4>
                                             <span>{idx.agen}</span>
                                          </h4>
                                          <p className="uid">{idx.uid}</p>
                                          <h3>
                                             <span> {idx.issue} </span>
                                          </h3>
                                          <ul>
                                             <li>
                                                <span className="icon-map-pin"></span>
                                                {idx.map}
                                             </li>
                                             <li>
                                                <span className="icon-calendar"></span>
                                                {idx.lan}
                                             </li>
                                             <h4 className="lang1">
                                                Support Type
                                             </h4>
                                             <li>{idx.sup}</li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="job-archive-footer">
                                    <div className="job-footer-left">
                                       <ul className="job-tag">
                                          <li>
                                             <Link to="#">{idx.stt}</Link>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="job-footer-left">
                                       <Link to="#">{idx.des}</Link>
                                    </div>
                                    <div className="job-footer-right">
                                       <div className="price">
                                          <p>
                                             {idx.price}
                                             <br />
                                             {idx.num}
                                             <br />
                                             {idx.num1}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                        <ul className="pagination-job padding">
                           {/* Previous Page */}
                           <li>
                              {currentPage > 1 && (
                                 <Link
                                    to={`/search?pageNumber=${currentPage - 1}`}
                                 >
                                    <i className="icon-keyboard_arrow_left"></i>
                                 </Link>
                              )}
                           </li>

                           {paginationLinks}

                           {/* Next Page */}
                           <li>
                              {currentPage < totalPages && (
                                 <Link
                                    to={`/search?pageNumber=${currentPage + 1}`}
                                 >
                                    <i className="icon-keyboard_arrow_right"></i>
                                 </Link>
                              )}
                           </li>
                        </ul>
                     </TabPanel>
                  </div>
               </Tabs>
            </div>
         </div>
      </section>
   );
}
JobSec1.propTypes = {
   data: PropTypes.array.isRequired,
   count: PropTypes.number.isRequired,
   searchKey: PropTypes.string.isRequired,
   locationKey: PropTypes.string.isRequired,
   loading: PropTypes.bool.isRequired,
 };
export default JobSec1;
