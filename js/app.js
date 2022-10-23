

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
*/
// this Variable to keep tracking the sections number
let number = 0;
/**
 * End Global Variables
*/

/*
-this function creat sections
-every section has an (id) and (data-*)
 */
const creatNewSection = function(){
    number++;
    const content = `<section id="section${number}" data-nav="section ${number}">
    <div class="landing__container">
    <h2>section ${number}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`
    document.querySelector("main").insertAdjacentHTML("beforeend", content)
}



// build the nav
// add the sections to the navigation bar
const navBar = document.getElementById("navbar__list");
let creatNavBar = function(){
    navBar.innerHTML = "";
    document.querySelectorAll("section").forEach(function(section){
        const navItems = `<li>
        <a href=#${section.id} data-nav=${section.id} class="menu__link">${section.dataset.nav}
        </a>
            </li>`
        navBar.insertAdjacentHTML("beforeend", navItems)
    })
}

//creat the main 4 sections in the page
for(let i = 0; i < 4; i++){
creatNewSection()
creatNavBar()
};


// Add your-active-class to the section viewport
// getBoundingClientRect() method to know the position of section
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -350 && active.getBoundingClientRect().top <= 150){
    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");
    }
    else{
        active.classList.remove("your-active-class");
        activeLink.classList.remove("active-link");
    }
	});
};

// Scroll to anchor ID using scrollIntOview event

navBar.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.dataset.nav) {
    document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            location.hash = `${event.target.dataset.nav}`;
    }, 300);
    }
});
/**
 * End Main Functions
 * Begin Events
 * 
*/
/*
-this event listener call the creatSection and create nav Bar 
-when we click on the button it create new section and add it to the Navigation Bar
*/
document.querySelector(".btn").addEventListener("click", function(){
    creatNewSection();
    creatNavBar();
});
// scroll to the page head
// scrollTo() event
document.getElementById("scroll_up").addEventListener("click", function(){
    window.window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });
})


