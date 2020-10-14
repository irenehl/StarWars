var utilities = {
    BASE_URL: "https://swapi0220.herokuapp.com/api/",
    pageLimits: (page, increment, limit) => {
        page += increment
    
        if(page < 1)
            page = 1
        else if(page > limit)
            page = limit

        return page
    }
}

export default utilities