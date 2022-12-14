import PropTypes from 'prop-types';
import { SearchInput } from './SearchBox.styled';
import { SearchForm, SearchFormBtn, SearchFormBtnLabel } from './SearchBox.styled';

export default function SearchBox({ onChange, filterValue }) {

    return (
         <SearchForm  onSubmit={(e) => {
            e.preventDefault(); 
                onChange(e.target.name.value)
            }}>
            <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchInput
                        name="name"
                        type="text"
                        autoComplete="off"
                        autoFocus
                placeholder="Search films"
                defaultValue={filterValue}
                    />
                </SearchForm>
    )
};

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired    
};



    // return (
    //     <div style={{width:"250px"}}>
    //         <SearchInput type="text" onChange={e => onChange(e.target.value)}/>
    //     </div>
    // );