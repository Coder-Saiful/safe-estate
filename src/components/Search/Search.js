import React from 'react';

const Search = () => {
    return (

        // <========= Search bar markup start ============= >

        <section className='searchBar px-2 px-sm-3'>
            <div className="container shadow p-3 border rounded-2">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-3 mb-lg-0">
                        <input type="search" placeholder='Street, City, State, Zip or keyword' className='form-control' />
                    </div>
                    <div className="col-lg-2 col-md-6 mb-3 mb-lg-0">
                        <select className="form-select" defaultValue='0'>
                            <option value="0">Property Type</option>
                            <option value="1">Houses</option>
                            <option value="2">Apartments</option>
                            <option value="3">Commercial</option>
                            <option value="4">Office</option>
                            <option value="5">Daily rental</option>
                            <option value="6">New buildings</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-3 mb-lg-0">
                        <select className="form-select" defaultValue='0'>
                            <option value="0">City</option>
                            <option value="1">Alpine</option>
                            <option value="2">Bass Lake</option>
                            <option value="3">Borrego Springs</option>
                            <option value="4">Campo</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-3 mb-lg-0">
                        <select className="form-select" defaultValue='0'>
                            <option value="0">Zipcode</option>
                            <option value="1">7251</option>
                            <option value="2">3400</option>
                            <option value="3">3000</option>
                            <option value="4">4144</option>
                        </select>
                    </div>
                    <div className="col-lg-2 col-12 mb-lg-0">
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </section>

        // <========= Search bar markup end ============= >
    );
};

export default Search;