function Search() {
    const Search=document.getElementById('search')

    Search.addEventListener('keypress',(search)=>{
        console.log(Search.value)
    })
}

export default Search;
