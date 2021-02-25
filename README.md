# employee-organizer

<!-- PSEUDOCODE -->

<!-- 
    HEADER/JUMBOTHING

    SEARCH FORM

    BODY/TABLE
        TABLE HEADERS (IMG, NAME, PHONE, EMAIL, DOB)
        TABLE BODY
            TABLE ROW
    
    INFO
        USER HAS IMG, NAME, PHONE, EMAIL, DOB

    HOOK

    useEffect

    STEAL API.JS FROM 19-STATE/#14 STU MULTIPLE CONTEXTS
        function sortByName (probably that seems the easiest)
            
    function handleButtonClick - when clicked sort by alphabetical or w/e

    function search (when user types in a name the list will be narrowed down and the user that has something related to name will show)
TAYLOR SWIFT TAYLOR SWIFT TAYLOR SWIFT TAYLOR SWIFT TAYLOR SWIFT :D
        const [searchState, setSearchState] = useState({
        search: "",
        user: user

        useEffect(() => {})

        API.searchName(name)
            setSearchState({
                user: user
            })

    return (
        <jumbothing>
        <searchbar>
        <table> (table header, table body)
    )
    
________________________________________________________________

    component
        jumbothing (hardcoded title)
        searchbar (onChange = function search)
        table <table header / table body>
        table header (IMG, NAME, PHONE, EMAIL, DOB) add button to whatever u wana sort
        table body (user.IMG, user.NAME, user.PHONE, user.EMAIL, user.DOB)

    pages
        gallery <jumbothing> <searchbar> <table> (table header, table body)

    util
        API.js GO HERE

    app.js <gallery />
    index.js <app.js />
 -->