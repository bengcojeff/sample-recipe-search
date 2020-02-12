import Search from './models/Search';

// const search = new Search('Pizza')

// console.log(search.getResult());

const state = {

}

const test = 'pizza';
const fsearch = async () => {
    // get query from the view
    const query = 'pizza'

    if (query) {
        // new search object and add to state
        state.search = new Search(query);
      
        // prepare UI for the result

        //search for recipe
        const result = await state.search.getResult();
        //render result on the UI
        console.log(state);
    }

}


document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    
    fsearch();
    console.log('heyheyhey')
    console.log(test);
    
});