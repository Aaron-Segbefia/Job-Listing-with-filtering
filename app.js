/*jshint esversion: 6 */
const jobsListings = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"]
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"]
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue, Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ];


const TAG_ACTIVE_CLASS = 'tag-active';
const SEARCH_HIDDEN_CLASS = 'search-hidden';
const CLOSE_TAG_CLASS = 'close-tag';
const TAG_CLASS = 'tag';

function getHTMLTag(tag, tagClasses){ 
    return `<span class= "${tagClasses}"> 
            ${tag}
    </span>`;
}

//function for created html elements for job cards 
function getJobsHTML(jobdata, filterTags=[]){ 
    const placeholder = '//JOB_TAGS';

    //html elements for job cards
    let jobCardsHTML = ` 
        <div class="job-card" id="id${jobdata.id.toString()}" data-new= ${jobdata.new} data-feauterd = "${jobdata.featured}"> 
            <div class="job-col job-col-left">
                <img src="${jobdata.logo}" alt="${jobdata.company}" class="jobs-img">
                <div class="info" id="id${jobdata.id.toString()}_newFeatures">
                    <span class="company">${jobdata.company}</span>
                    <span class="title">${jobdata.position}</span>

                    <ul> 
                        <li class="details">${jobdata.postedAt} </li>
                        <li class="details">${jobdata.contract} </li>
                        <li class="details">${jobdata.location} </li>
                    </ul>
                </div>
            </div>
            <div class = "job-col job-col-right">
                ${placeholder}
            </div>
        </div>
    
    `;

    


   /* const id1 = document.getElementById('id1');
    const id2 = document.getElementById('id2');
    const newly = document.createElement('span');
    newly.classList.add('new');
    newly.innerHTML = "New";
    const info = id1.document.querySelector('.job-col-left').document.querySelector('.info');
    info.insertBefore(newly, info.children[1]);*/


    
     //list for getting the roles levels and languages from the data given.
    const tagList = [ 
        jobdata.role,
        jobdata.level,
        ...(jobdata.languages || []),
        ...(jobdata.tools || [])
    ];

    //used map method on taglist array to get all data that includes both lower and upper cases.
    const tagListLowercase = tagList.map((t)=>{ 
      return  t && t.toLowerCase();
    });

    //criteria to check if filter tags array argument contains the necessary tags
    //if filte tag has zero elements or filter tag contains all necessary tags passesFilter variable shold be assigned value of true
    const passesFilter = !filterTags.length || filterTags.every(tag=>(tagListLowercase.includes(tag && tag.toLowerCase())));
/*
    //if filter tag doesn't have truth value then an empty string should be returned
    if(!passesFilter){ 
        return '';
    }

    //used reduce method to update the tag lists in html
    const tagString = tagList.reduce((acc, curr)=>{ 
        const activeClass = (filterTags.includes(curr) && TAG_ACTIVE_CLASS) || '';
        
        return acc + getHTMLTag(curr, `${TAG_CLASS}  ${activeClass}`);
    }, '');

    return jobCardsHTML.replace(placeholder, tagString);
*/
//filter criteria
    if(passesFilter){ 
        const tagString = tagList.reduce((acc, curr)=>{ 
            const activeClass = (filterTags.includes(curr) && TAG_ACTIVE_CLASS) || '';
            
            return acc + getHTMLTag(curr, `${TAG_CLASS}  ${activeClass}`);
        }, '');
    
        return jobCardsHTML.replace(placeholder, tagString);
    
        
    }
    return '';
}

//function to add or remove classes
function toggleClass(el, className){ 
    if(el.classList.contains(className)){ 
        el.classList.remove(className);

        return;
    }
    el.classList.add(className);
}

//function to create tags for search bar by filtering tags on search content and displaying them
function getSearchBarTags(tagValue, searchContentEl){ 
    let searchBarTags = Array.from(searchContentEl.children)
    .map(child => child.innerHTML && child.innerHTML.trim())
    .filter(tag => !!tag);

    if(searchBarTags.includes(tagValue)){ 
        searchBarTags = searchBarTags.filter(tag=> tag !== tagValue);
    }else{ 
        searchBarTags =  [...searchBarTags, tagValue];
    }
    return searchBarTags;
}

//function to populate the job div in the document with the job cards
function setJobsListings(filterTags){ 
    const jobsLists = jobsListings.reduce((acc, curr)=>{ 
        return acc + getJobsHTML(curr, filterTags);
    }, '');
    document.getElementById('jobs').innerHTML = jobsLists;
    addNewFeatures();
    addNewFeatures2();
    addFeatures();
}


function displaySearchWrap(display=false){ 
    //const wrapper = document.getElementById('search');
    const wrapper = document.querySelector('#search');

    if(display){ 
        wrapper.classList.remove(SEARCH_HIDDEN_CLASS);
        return;
    }
  wrapper.classList.add(SEARCH_HIDDEN_CLASS)
;
}

//this function adds content to the search bar
function setSearchbarContent(searchContentEl, tags){ 
    searchContentEl.innerHTML = tags.reduce((acc, curr)=>{ 
        return acc + getHTMLTag(curr, CLOSE_TAG_CLASS);
    }, '');
}

function reset(searchContentEl){ 
    searchContentEl.innerHTML = '';

    setJobsListings();
    /*addNewFeatures();
    addNewFeatures2();
    addFeatures();*/
    displaySearchWrap(false);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
}




window.addEventListener('click', (event)=>{ 
    const targetEl = event.target;
    const targetText = targetEl.innerHTML.trim();
    const searchContentEl = document.getElementById('search-content');
    const searchBarTags = getSearchBarTags(targetText, searchContentEl);

    if(targetEl.id === 'clear' || !searchBarTags.length){ 
        reset(searchContentEl);
        return;
    }

    if(![TAG_CLASS, CLOSE_TAG_CLASS].some(c => targetEl.classList.contains(c))){ 
        return;
    }

    setSearchbarContent(searchContentEl, searchBarTags);
    toggleClass(targetEl, TAG_ACTIVE_CLASS);
    displaySearchWrap(searchBarTags.length>0);
    setJobsListings(searchBarTags);
    /*addNewFeatures();
    addNewFeatures2();
    addFeatures();*/
});

setJobsListings();
/*addNewFeatures();
addNewFeatures2();
addFeatures();*/

function addNewFeatures(){
const id1 = document.getElementById('id1_newFeatures');
const newly = document.createElement('span');
newly.innerHTML = "New!";
const featured = document.createElement('span');
featured.innerHTML = "Featured";

newly.classList.add("new");
featured.classList.add("featured");


id1.insertBefore(newly, id1.children[0].nextSibling);
id1.insertBefore(featured, id1.children[1].nextSibling);
}

function addNewFeatures2(){ 
    
    const id2 = document.getElementById('id2_newFeatures');
    const newly = document.createElement('span');
    newly.innerHTML = "New!";
    const featured = document.createElement('span');
    featured.innerHTML = "Featured";

    newly.classList.add("new");
    featured.classList.add("featured");


    id2.insertBefore(newly, id2.children[0].nextSibling);
    id2.insertBefore(featured, id2.children[1].nextSibling);

}

function addFeatures(){ 
    const id3 = document.getElementById('id3_newFeatures');
    const featured = document.createElement('span');
    featured.innerHTML = "Featured";
    featured.classList.add("featured");
    id3.insertBefore(featured, id3.children[0].nextSibling);


}