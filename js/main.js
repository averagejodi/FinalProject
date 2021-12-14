// 1. createElemWithText 
      
function createElemWithText(nameOfNewElem = "p", textContent = "", className = "") {
    let newCreatedElemWithText = document.createElement(nameOfNewElem);
    newCreatedElemWithText.textContent = textContent;
    newCreatedElemWithText.className = className;
    return newCreatedElemWithText;
  }

  console.log(createElemWithText("p", "Newly created paragraph or p element."));
  console.log(createElemWithText("h1", "Newly created h1 or heading element.", "h1class"));
  console.log(createElemWithText("div", "Newly created div element.", "divclass"));
  console.log(createElemWithText("h3", "Newly created h3 element."));


// 2. createSelectOptions



  
// 3. toggleCommentSection

  function toggleCommentSection(postId) {
        if (!postId) {
            return undefined;
        } else {
            const commentSections = document.querySelectorAll('[data-post-id]');
            for (let i = 0; i < commentSections.length; i++) {
                const commentSection = commentSections[i];
                if (commentSection.getAttribute('data-post-id') === postId) {
                    commentSection.classList.toggle('hide');
                    return commentSection;
                }
            }
            return null;
        }   
    }


// 4. toggleCommentButton

    function toggleCommentButton (postID) {
          if (!postID) {
          return;
        }    
      const btnSelectedEl = document.querySelector(`button[data-post-id = "${postID}"`);
      if (btnSelectedEl != null) {
      btnSelectedEl.textContent === "Show Comments" ? (btnSelectedEl.textContent = "Hide Comments") : (btnSelectedEl.textContent = "Show Comments");
      }
    return btnSelectedEl;
      };

      console.log(toggleCommentButton("btnToTest"));



  
// 5. deleteChildElements

    function deleteChildElements(parentElement) {
    let child = parentElement.lastElementChild;
    while (child) {
      parentElement.removeChild(child);
      child = parentElement.lastElementChild;
    }
    return parentElement;
  }
 

// 6. addButtonListeners

  function addButtonListeners(){
    
    
    
  }



// 7. removeButtonListeners

  function removeButtonListeners(){



}


// 8. createComments

  function createComments(comments) {
  if (!comments) {
    return undefined;
  }
  
  let frag = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
    const element = comments[i];
    let p;
    let comment;
   
    let a = document.createElement("a");
    let h3 = createElemWithText("h3", comment.name);
    let p1 = createElemWithText("p", comment.body);
    let p2 = createElemWithText("p", `From: ${comment.email}`);
    a.appendChild(h3);
    a.appendChild(p);
    a.appendChild(p);
    frag.appendChild(a);
  }
  return frag;
}


// 9. populateSelectMenu

function populateSelectMenu(users) {

if (!users) return;
let createSelectOptions;
let menu = document.querySelector("#selectMenu");
let options = createSelectOptions(users);

for (let i = 0; i < options.length; i++) {
    let option = options[i];
    menu.append(option);
} 

return menu;

}


// 10. getUsers


    let getUsers = async() => {
    let retrieve;
    try {
        retrieve = await fetch("https://jsonplaceholder.typicode.com/users");
    } 
    catch (error) {
        console.log(error);
    } 
    return await retrieve.json();

}
    

// 11. getUserPosts
    
    let getUserPosts = async(userId) => {
    if (!userId) return;
    let retrieve;
    try {
        retrieve = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    } 
    catch (error) {
        console.log(error);
    } 
    return retrieve.json();

}
    
    
// 12. getUser
    
    let getUser = async(userId) => {
    if (!userId) return;
    let retrieve;
    try {
        retrieve = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    } 
    catch (error) {
        console.log(error);
    } 
    return retrieve.json();

}
    

// 13. getPostComments
    
    function getPostComments(){
      
      
      
      
    }
    
    
// 14. displayComments

    function displayComments(){




    }

    
    
// 15. createPosts

  
  function createPosts(){
    
    
    
    
  }
    

// 16. displayPosts
    
const displayPosts = async (posts) => {
let myMain = document.querySelector("main");
let createPosts;
let element = (posts) ? await createPosts(posts) : document.querySelector("main p");
myMain.append(element);
return element;
}



// 17. toggleComments

function toggleComments(event, postId){
if (!event || !postId){
    return undefined;
}
event.target.listener = true;
let section  = toggleCommentSection(postId);
let button = toggleCommentButton(postId);
return [section, button];
}



// 18. refreshPosts
const refreshPosts = async (posts) => {
if (!posts){
    return undefined;
}
let buttons = removeButtonListeners();
let myMain = deleteChildElements(document.querySelector("main"));
let fragment = await displayPosts(posts);
let button = addButtonListeners();
return [buttons, myMain, fragment, button];
}


// 19. 
const selectMenuChangeEventHandler = async (e) => {
let userId = e?.target?.value || 1;
let posts = await getUserPosts(userId);
let refreshPostsArray = await refreshPosts(posts);
return [userId, posts, refreshPostsArray];
}

// 20.
const initPage = async() => {
let users = await getUsers();
let select = populateSelectMenu(users);
return [users, select];
}

// 21.
function initApp(){
initPage();
let select = document.getElementById("selectMenu");
select.addEventListener("change", selectMenuChangeEventHandler, false);
}

document.addEventListener("DOMContentLoaded", initApp, false);

