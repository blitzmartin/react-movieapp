import DropdownMenu from './DropdownMenu'
import Searchbar from './Searchbar'

function Filtering() {

    const categories = [
        "Category",
        "Drama",
        "Romantic",
        "Horror",
        "Animation",
        "Comedy",
        "Adventure"
    ];
    
    const sortBy = [
        "Sort by...",
        "Title",
        "Rating",
        "Year"
    ];

    return (
        <div className='Filtering'>
            <Searchbar />
            <DropdownMenu options={categories} />
            <DropdownMenu options={sortBy} />
        </div>

    )
}

export default Filtering