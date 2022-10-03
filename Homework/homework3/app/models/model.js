var homeContent = '<h1>Home</h1>';
// var coursesContent = '<h1>Courses</h1>';
var workshopsContent = '<h1>Workshops</h1>';
var studentsContent = '<h1>Students</h1>';
var blogContent = '<h1>Blog</h1>';

export function changePage(pageID) {
    let page = pageID + "Content";
    $("app").hmtl(eval(page));
}
    // $get('')
    // $(#appCredentialsC)