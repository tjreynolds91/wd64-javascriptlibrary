const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 's1nFzxurbJUtKANO6R1rKr4L7sReH3JP'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');


//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
console.log('pageNumber:', pageNumber);
let displayNav = false;
        //1                     //2
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3

                    //1
function fetchResults(e) {
    e.preventDefault(); //2
    // Assemble the full URL
    url = baseURL + '?api-key=' + key +'&page=' + pageNumber +'&q=' +searchTerm.value; //3
    console.log("URL:", url);
    if (startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date' + startDate.value;
    };
    
    if(endDate.value !== '') {
        url +='&end_date=' + endDate.value;
    };
    fetch(url).then(function(result){
        // console.log(result)
        return result.json(); //2
    }).then(function(json) {
      displayResults(json); //1 & //3
    });
}

//2
function displayResults(json) {
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;


    if(pageNumber === 0) {
        previousBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    }
     
    else if(pageNumber > 0 && articles.length <10) { // challenge
        previousBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        nav.style.display = 'block';
    }
    else if(pageNumber > 0 && articles.length === 10) { // bonus challenge
        previousBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        nav.style.display = 'block';

    }
    else {
        nav.style.display = 'block'; // hides the nav display if tless than 10 times are in the
    }
    
    if(articles.length === 0) {
        nav.style.display = 'block';
    } else {
        
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement("h2");
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords:';

            for(let j = 0; j< current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + '';
                para.appendChild(span);
            }

            if(current.multimedia.length > 0) {

                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;

                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');


            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage(e){
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber)
}  //5
 
function previousPage(e){
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return previousBtn;
    }


    fetchResults(e);
    console.log("Page:", pageNumber);
} //5