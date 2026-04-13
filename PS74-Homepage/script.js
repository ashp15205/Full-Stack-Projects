const courses = [{ico:"💻", n:"Web Dev"}, {ico:"📊", n:"Data Science"}, {ico:"📱", n:"Mobile Apps"}, {ico:"🤖", n:"AI Basics"}];
document.getElementById("cards").innerHTML = courses.map(c => `<div class="course"><div class="ico">${c.ico}</div><b>${c.n}</b></div>`).join('');
