import React, { useState } from "react";
import SelectLocation from "../dropdown";
import { useNavigate } from "react-router-dom";

FormSearch.propTypes = {};

function FormSearch() {
   const [location, setLocation] = useState("");
   const [searchQuery, setSearchQuery] = useState("");
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      const searchKey = searchQuery !== "" ? `keyword=${searchQuery}` : "";
      const locationKey = location !== "" ? `&location=${location}` : "";
      navigate(`/Search?${searchKey}${locationKey}&pageNumber=1`);
   };

   return (
      <section className="form-sticky stc1">
         <div className="tf-container">
            <div className="job-search-form inner-form-map st1">
               <form onSubmit={handleSubmit}>
                  <div className="row-group-search">
                     <div className="form-group-1">
                        <input
                           type="text"
                           className="input-filter-search"
                           placeholder="Sexual Haresment, key words or issues"
                           onChange={(e) => {
                              setSearchQuery(e.target.value);
                           }}
                        />
                        <span className="icon-search search-job"></span>
                     </div>
                     <div className="form-group-2">
                        <span className="icon-map-pin"></span>
                        <SelectLocation setLocation={setLocation} />
                     </div>
                     {/* <div className="form-group-3">
                <span className="icon-filter"></span>
                <div
                  className={`filter-radio ${isOpen ? "open" : ""}`}
                  onClick={handleClick}
                >
                  <p>Filter More</p>
                </div>
              </div>
              <div
                className={`wd-filter-radio ${
                  isOpen ? "modal-menu--open" : ""
                }`}
              >
                <div className="content">
                  <div className="fl-cl lc1">
                    <h6>Family Related</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-1" />
                          <label htmlFor="checkbox-1"></label>
                        </div>
                        <label>Relationship (1,675)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-2" />
                          <label htmlFor="checkbox-2"></label>
                        </div>
                        <label>Cheating (5,675)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc2">
                    <h6>Business and Career </h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-4" />
                          <label htmlFor="checkbox-4"></label>
                        </div>
                        <label>Career Counselling (1,675)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-5" />
                          <label htmlFor="checkbox-5"></label>
                        </div>
                        <label>Workplace Issues (623)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-6" />
                          <label htmlFor="checkbox-6"></label>
                        </div>
                        <label>Maternity Related (45)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-7" />
                          <label htmlFor="checkbox-7"></label>
                        </div>
                        <label>Salary,Wages,Benifits,Leave (65)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc3">
                    <h6>Crime</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-10" />
                          <label htmlFor="checkbox-10"></label>
                        </div>
                        <label>Rape (67)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-11" />
                          <label htmlFor="checkbox-11"></label>
                        </div>
                        <label>Cyber Bullying (277)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-12" />
                          <label htmlFor="checkbox-12"></label>
                        </div>
                        <label>Sexual Harresment(1,627)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-13" />
                          <label htmlFor="checkbox-13"></label>
                        </div>
                        <label>Bullying (7,627)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-14" />
                          <label htmlFor="checkbox-14"></label>
                        </div>
                        <label>Dowry Harresment (227)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-15" />
                          <label htmlFor="checkbox-15"></label>
                        </div>
                        <label>Death Threat(527)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc4">
                    <h6>Crime</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-10" />
                          <label htmlFor="checkbox-10"></label>
                        </div>
                        <label>Sucidal Tendicies (6,277)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-11" />
                          <label htmlFor="checkbox-11"></label>
                        </div>
                        <label>Blackmailing (27)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-12" />
                          <label htmlFor="checkbox-12"></label>
                        </div>
                        <label>Stalking(1,627)</label>
                      </li>
                    </ul>
                  </div>
                  <div className="fl-cl lc5">
                    <h6>Paid / Free</h6>
                    <ul>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-10" />
                          <label htmlFor="checkbox-10"></label>
                        </div>
                        <label>Paid (67)</label>
                      </li>
                      <li>
                        <div className="round">
                          <input type="checkbox" id="checkbox-11" />
                          <label htmlFor="checkbox-11"></label>
                        </div>
                        <label>Free (277)</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
                     <div className="form-group-4">
                        <button className="btn btn-find">Search</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}

export default FormSearch;
