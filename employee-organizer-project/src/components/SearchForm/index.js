import React from "react";

function searchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="searchName">Employee Search</label>
                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Employee Name" onChange={(event) => {
                    event.preventDefault();
                    props.handleSearchQueryChange(event)
                }}></input>
            </div>
        </form>
    )
}
export default searchForm;