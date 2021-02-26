import React from "react";

function searchForm() {
    return (
        <form>
            <div className="form-group">
                <label for="searchName">Employee Search</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Employee Name"></input>
            </div>
        </form>
    )
}
export default searchForm;