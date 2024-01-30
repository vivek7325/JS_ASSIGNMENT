
async function showPostData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(apiUrl);
        if (!response.ok)   
        {
            throw new Error(`HTTP error! Status :${response.status}`);
        }
        const data = await response.json();
        let ArrayOfPost = data.slice(0,5).map((item)=>{
            return item.title;
        })

        console.log(ArrayOfPost);
        
    }
    catch (error) {
        console.error("Error Post API Fetching Data", error);
    }

}
showPostData();


// PS C:\Users\HP\Javascript> node "c:\Users\HP\Javascript\JS_ASSIGNMENT\004-006API.js"
// [
//   'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   'qui est esse',
//   'ea molestias quasi exercitationem repellat qui ipsa sit aut',  
//   'eum et est occaecati',
//   'nesciunt quas odio'
// ]






