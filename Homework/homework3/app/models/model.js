var homeContent = '<h1>Home</h1>';
var coursesContent = '<h1>Courses</h1>';
var workshopsContent = '<h1>Workshops</h1>';
var studentsContent = '<h1>Students</h1>';
var blogContent = '<h1>Blog</h1>';

export function changePage(pageID) {
    // let page = pageID + "Content";
//    path
$.get(`pages/${pageId}.html`, function (data) {

    console.log(data);
    
    $("#app").html(data);

}).fail((error)  => { 
    if(error.status == "404") { 
        alert("Page can not be found. Please check your url.")

    }
   console.log("error" , error.status);
});

    // $("#app").html(eval(page));
}
    // $get('')
    // $(#appCredentialsC)