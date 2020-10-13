var utilities = {
    BASE_URL: "https://swapi0220.herokuapp.com/api/",
    pageLimits: (page, increment) => {
        page += increment
    
        if(page < 1)
            page = 1
        else if(page > 4)
            page = 4

        return page
    }
}

export default utilities