var homeContent = '/Homework/homework3/home.html';
var coursesContent = '/Homework/homework3/courses.html';
var contactContent = '/Homework/homework3/index.html#contact';
var studentsContent = '/Homework/homework3/student-success.html';
var blogContent = '/Homework/homework3/blog.html';

export function changePage(pageID) {
    // let page = pageID + "Content";
//    path
$.get(`pages/${pageID}.html`, function (data){

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