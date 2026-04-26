let drag;

list.ondragstart = e => drag = e.target;

list.ondragover = e => {
    e.preventDefault();
    let after = [...list.children].find(li =>
        e.clientY < li.getBoundingClientRect().top + li.offsetHeight/2
    );
    list.insertBefore(drag, after);
};