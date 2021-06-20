import React from 'react';

const SearchBar=({ term , setTerm}) =>{
   

  const onInputChange = event => {
    setTerm(event.target.value)
  };

  const onFormSubmit = event => {
    event.preventDefault();
    setTerm(term);
    
  };

 
    return (
      <div className="search-bar ui segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Youtube</label>
            <input
              type="text"
              value={term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    );
  
}

export default SearchBar;
